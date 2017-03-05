var firebase = require('firebase/app');
var Promise = firebase.Promise;
var xtend = require('xtend');

var refs = {};

function open(url) {
  window.open(url, '_blank');
}

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
      changes(app, user);
      app.ports.createUserResponse.send({ ok: user.uid || 'fake-id', err: null });
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

function updateLink(link, app) {
  if (refs.linksRef) {
    var newLink = xtend(link);
    delete newLink.guid;

    refs.linksRef.child(link.guid).set(newLink);
  }
}

function createLink(payload) {
  var now = Date.now();

  firebase.database().ref('links/' + payload.uid).push().set({
    href: payload.href,
    clickedAt: 0,
    timestamp: now
  });
}

// TODO: enable users to create their own Filters
// function createFilter(payload) {
//   var now = Date.now();
//
//   firebase.database().ref('filters/' + payload.uid).push().set({
//     values: payload.values,
//     timestamp: now
//   });
// }
//
// function filterChanges(app, uid) {
//
// }

function createFilterAssignment(payload) {
  var now = Date.now();

  firebase.database().ref('filter-assignments/' + payload.uid).push().set({
    values: payload.values,
    timestamp: now
  });
}

function deleteFilterAssignment(guid) {
  if (refs.filterAssignmentsRef) {
    refs.filterAssignmentsRef.child(guid).remove();
  }
}

function filterAssignments(app, uid) {
  refs.filterAssignmentsRef = refs.filterAssignmentsRef ||
    firebase.database().ref('filter-assignments/' + uid);

  function onAssignmentValue(snapshot) {
    var vals = snapshot.val();

    var filterAssignments =
      Object
        .keys(vals || {})
        .map(function(guid) {
          var filterAssignment = vals[guid];
          return xtend(filterAssignment, { guid: guid });
        });

    app.ports.filterAssignments.send(filterAssignments);
  }

  refs.filterAssignmentsRef.on('value', onAssignmentValue);
}

function links(app, uid) {
  refs.linksRef = refs.linksRef ||
    firebase.database().ref('links/' + uid);

  // TODO: add pagination with child_added event
  refs.linksRef.on('value', function(snapshot) {
    var vals = snapshot.val();

    var links = Object.keys(vals || {}).map(function(guid) {
      var link = vals[guid];

      return xtend({clickedAt: 0}, link, {guid: guid});
    }).sort(function(link1, link2) {
      var val;

      if (link1.clickedAt < link2.clickedAt) {
        val = 1;
      } else if (link1.clickedAt > link2.clickedAt) {
        val = -1;
      } else {
        val = (link1.timestamp < link2.timestamp) ? 1 : -1;
      }

      return val;
    });

    app.ports.links.send(links);
  });
}

function changes(app, user) {
  if (user) {
    [
      links,
      filterAssignments
    ]
    .forEach(function(emitter) {
      emitter(app, user.uid);
    });
  }
}

module.exports = {
  receive: {
    createFilterAssignment: createFilterAssignment,
    deleteFilterAssignment: deleteFilterAssignment,
    createLink: createLink,
    open: open,
    createUser: createUser,
    deleteLink: deleteLink,
    logOut: logOut,
    updateLink: updateLink
  },
  send: [
    changes
  ]
};
