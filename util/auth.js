const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export const authMiddleWare = (history) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

      console.log(user);

      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      return uid;
      // ...
    } else {
      history.push('/');
      // User is signed out.
      // ...
    }
  });
}

/*
export const authMiddleWare = (history) => {
    const authToken = localStorage.getItem('AuthToken');
    if(authToken === null){
        history.push('/login')
    }
}
*/