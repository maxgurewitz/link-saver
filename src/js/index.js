'use strict';
require('../scss/index.scss');
require('../html/index.html');

var EventBus = require('vertx3-eventbus-client');
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var Elm = require('../elm/Main');
var ports = require('../js/ports');

var fbpid = 'link-saver-44fb2';

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

    var eb = new EventBus('http://localhost:8080/eventbus');

    eb.onopen = function onopen() {
      console.log('Event bus opened.');

      eb.send('create-user', { name: 'max' }, function(err, res) {
        console.log('create-user callback', err, res);
      });
    };

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
