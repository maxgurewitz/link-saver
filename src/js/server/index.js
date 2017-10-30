const Koa = require('koa');
const http = require('http');
const sockjs = require('sockjs');
const { Client } = require('pg');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const ERROR_CODES = {
  DEFAULT: 0,
  BAD_REQUEST: 1,
  NOT_FOUND: 2,
  NOT_AUTHORIZED: 3
};

const DEFAULT_ERROR = {
  type: 'error',
  data: {
    code: ERROR_CODES.DEFAULT
  }
};

async function start() {
  const app = new Koa();

  const pg = new Client({
    host: 'localhost',
    database: 'link-saver',
    port: 5432
  });

  await pg.connect();

  const operations = {
    createUser(data, send) {
    },

    login(data, send) {
      pg.query('SELECT * FROM users WHERE email = $1', [data.email])
        .then(res => {
          if (!res.rows.length) {
            return Promise.reject({
              type: 'error',
              data: {
                message: 'unable to locate user',
                code: ERROR_CODES.NOT_FOUND
              }
            });
          } else {
            const user = res.rows[0];

            return bcrypt.compare(user.passwordHash, data.password).then(isEqual => {
              if (!isEqual) {
                return Promise.reject({
                  type: 'error',
                  data: {
                    message: 'wrong password',
                    code: ERROR_CODES.NOT_AUTHORIZED
                  }
                });
              } else {
                return {
                  type: 'session',
                  data: {}
                };
              }
            });
          }
        })
        .then(action => send(action))
        .catch(err => {
          if (err.data && err.type && Object.keys(err).length === 2) {
            send(err);
          } else {
            console.error(err.stack);
            send(DEFAULT_ERROR);
          }
        });
    }
  };

  const sockjsServer = sockjs.createServer({
    sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
  });

  sockjsServer.on('connection', conn => {
    function send(action) {
      conn.write(JSON.stringify(action));
    }

    conn.on('data', unparsed => {
      let message;
      try {
        message = JSON.parse(unparsed);
      } catch (e) {
        return send({
          type: 'error',
          data: {
            code: ERROR_CODES.BAD_REQUEST,
            message: `failed to parse json request: ${e.stack}`
          }
        });
      }

      const operation = operations[message.type];

      if (!operation) {
        send({
          type: 'error',
          data: {
            code: ERROR_CODES.NOT_FOUND,
            message: `operation for type '${message.type}' not found`
          }
        });
      } else {
        operation(message.data, send);
      }
    });
  });

  const server = http.createServer(app.callback());

  sockjsServer.installHandlers(server, { prefix: '/connect' });

  server.listen(3001, '0.0.0.0');
}

start().catch(e => {
  console.error('server failed to start', e.stack);
  process.exit(1);
});
