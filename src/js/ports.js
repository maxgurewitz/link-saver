var firebase = require('firebase/app');
var uuid = require('uuid');

function createLink(href) {
  var id = uuid();

  // FIXME: will want to be user specific
  // firebase.auth().currentUser.uid;
  firebase.database().ref('links/' + id).set({
    href: href,
    timestamp: Date.now()
  });
}

function linkChanges(app) {
  firebase.database().ref('links').on('value', function(snapshot) {
    var val = snapshot.val();

    var links = Object.keys(val).map(function(guid) {
      var link = val[guid];

      return {
        guid: guid,
        href: link.href,
        timestamp: link.timestamp
      };
    });

    app.ports.links.send(links);
  });
}

module.exports = {
  receive: {
    createLink: createLink
  },
  send: [
    linkChanges
  ]
};
