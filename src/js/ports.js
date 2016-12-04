var firebase = require('firebase/app');
var Promise = firebase.Promise;

var refs = {};

function logOut(uid, app) {
  firebase.auth().signOut().then(function() {
    if (refs.linksRef) {
      refs.linksRef.off();
      refs.linksRef = null;
    }

    app.ports.logOutResponse.send(null);
  }, function(error) {
    app.ports.logOutResponse.send(String(error));
  });
}

function createUser(loginForm, app) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(loginForm.email, loginForm.password)
    .catch(function(error) {
      return error.code === 'auth/email-already-in-use' ?
        firebase.auth().signInWithEmailAndPassword(loginForm.email, loginForm.password) :
        Promise.reject(error);
    })
    .then(function(user) {
      var uid = user.uid || 'fake-id';
      linkChanges(app, uid);
      app.ports.createUserResponse.send({ ok: uid, err: null });
    })
    .catch(function(err) {
      app.ports.createUserResponse.send({ err: err.message || "", ok: null });
    });
}

function deleteLink(guid, app) {
  if (refs.linksRef) {
    refs.linksRef.child(guid).remove();
  }
}

function createLink(payload) {
  firebase.database().ref('links/' + payload.uid).push().set({
    href: payload.href,
    timestamp: Date.now()
  });
}

function linkChanges(app, uid) {
  refs.linksRef = refs.linksRef ||
    firebase.database().ref('links/' + uid);

  // TODO: add pagination with child_added event
  refs.linksRef.on('value', function(snapshot) {
    var vals = snapshot.val();

    var links = Object.keys(vals || {}).map(function(guid) {
      var link = vals[guid];

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

function linkChangesFromUser(app, user) {
  if (user) {
    linkChanges(app, user.uid);
  }
}

module.exports = {
  receive: {
    createLink: createLink,
    createUser: createUser,
    deleteLink: deleteLink,
    logOut: logOut
  },
  send: [
    linkChangesFromUser
  ]
};
