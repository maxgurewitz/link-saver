var firebase = require('firebase/app');
var uuid = require('uuid');

function createLink(href) {
  var id = uuid();

  firebase.database().ref('links/' + id).set({
    href: href,
    timestamp: Date.now()
  });
}

module.exports = {
  subscriptions: {
    createLink: createLink
  }
};
