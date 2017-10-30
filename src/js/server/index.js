const Koa = require('koa');
const http = require('http');
const sockjs = require('sockjs');
const { Client } = require('pg');

async function start() {
  const app = new Koa();

  const pg = new Client({
    host: 'localhost',
    database: 'link-saver',
    port: 5432
  });

  await pg.connect();

  const actions = {
    createUser(data, send) {
    }
  };

  const ERRORS = {
    DEFAULT: 0,
    BAD_REQUEST: 1,
    NOT_FOUND: 2
  }

  const sockjsServer = sockjs.createServer({
    sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
  });

  sockjsServer.on('connection', conn => {
    function send() {
      conn.send(JSON.stringify(arguments));
    }

    conn.on('data', unparsed => {
      let message;
      try {
        message = JSON.parse(unparsed);
      } catch (e) {
        return send({
          type: 'error',
          data: {
            code: ERRORS.BAD_REQUEST,
            message: `failed to parse json request: ${e.stack}`
          }
        });
      }

      const action = actions[message.type];

      if (!action) {
        send({
          type: 'error',
          data: {
            code: ERRORS.NOT_FOUND,
            message: `action for type '${message.type}' not found`
          }
        });
      } else {
        action(message.data, send);
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
