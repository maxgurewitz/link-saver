'use strict';
require('../../scss/index.scss');
require('../../html/index.html');

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var Elm = require('../../elm/Main');
var ports = require('./ports');
var SockJS = require('sockjs-client');

var fbpid = 'link-saver-44fb2';

var sock = new SockJS('http://localhost:3001/connect');

sock.onopen = function() {
  sock.send(JSON.stringify({ type: 'login', data: { email: 'a@yahoo.com' } }));
};

sock.onmessage = function(e) {
  console.log('message', e.data);
};

firebase.initializeApp({
  apiKey: 'AIzaSyAuYCjKcCsk0Z0r5JKjQTVAPpJCB07PJgk',
  authDomain: fbpid + '.firebaseapp.com',
  databaseURL: 'https://' + fbpid + '.firebaseio.com'
});

var initialized = false;

firebase.auth().onAuthStateChanged(function(user) {
  if (!initialized) {
    initialized = true

    var flags = {
      user: user || null
    };

    var app = Elm.Main.embed(document.getElementById('main'), flags);

    Object.keys(ports.receive).forEach(function(name) {
      var subscription = ports.receive[name];

      app.ports[name].subscribe(function(data) {
        subscription(data, app);
      });
    });

    ports.send.forEach(function(sendPort) {
      sendPort(app, user);
    });
  }
});
