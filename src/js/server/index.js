const Koa = require('koa');
const http = require('http');
const sockjs = require('sockjs');

const app = new Koa();

const sockjsServer = sockjs.createServer({
  sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
});

sockjsServer.on('connection', conn => {
  conn.on('data', message => {
    console.log('loc1', message);
    conn.write(JSON.stringify({ baz: 'bar' }));
  });
});

const server = http.createServer(app.callback());

sockjsServer.installHandlers(server, { prefix: '/connect' });

server.listen(3001, '0.0.0.0');
