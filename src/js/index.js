'use strict';

require('../html/index.html');
var Elm = require('../elm/Main');
var ports = require('../js/ports');

var app = Elm.Main.embed(document.getElementById('main'));

Object.keys(ports.subscriptions).forEach(function(name) {
  var subscription = ports.subscriptions[name];
  app.ports[name].subscribe(subscription);
});
