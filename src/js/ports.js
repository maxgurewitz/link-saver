var firebase = require('firebase/app');
var uuid = require('uuid');

function createUser(loginForm) {
  console.log('loc1', loginForm);
}

function createLink(href) {
  var id = uuid();

  // FIXME: will want to be user specific
  // firebase.auth().currentUser.uid;
  // use push method: https://firebase.google.com/docs/database/web/lists-of-data
  firebase.database().ref('links/' + id).set({
    href: href,
    timestamp: Date.now()
  });
}

function linkChanges(app) {
  firebase.database().ref('links').on('value', function(snapshot) {
    var val = snapshot.val();

    // FIXME: use list api
    var links = Object.keys(val).map(function(guid) {
      var link = val[guid];

      return {
        guid: guid,
        href: link.href,
        timestamp: link.timestamp
      };
    }).sort(function(link1, link2) {
      return link1.timestamp < link2.timestamp ? 1 : -1;
    });

    app.ports.links.send(links);
  });
}

module.exports = {
  receive: {
    createLink: createLink,
    createUser: createUser
  },
  send: [
    linkChanges
  ]
};
