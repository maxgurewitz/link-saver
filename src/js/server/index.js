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

  const sockjsServer = sockjs.createServer({
    sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
  });

  sockjsServer.on('connection', conn => {
    conn.on('data', message => {
      conn.write(JSON.stringify({ baz: 'bar' }));
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
