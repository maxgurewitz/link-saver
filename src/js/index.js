'use strict';
require('../html/index.html');

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var Elm = require('../elm/Main');
var ports = require('../js/ports');

var fbpid = 'link-saver-44fb2';

firebase.initializeApp({
  apiKey: 'AIzaSyAuYCjKcCsk0Z0r5JKjQTVAPpJCB07PJgk',
  authDomain: fbpid + '.firebaseapp.com',
  databaseURL: 'https://' + fbpid + '.firebaseio.com'
});

var app = Elm.Main.embed(document.getElementById('main'));

Object.keys(ports.subscriptions).forEach(function(name) {
  var subscription = ports.subscriptions[name];
  app.ports[name].subscribe(subscription);
});
