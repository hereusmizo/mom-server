const firebase = require("firebase-admin");
var serviceAccount = require("../../mom-mizoram-firebase-adminsdk.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://mom-mizoram.firebaseio.com",
});

module.exports = firebase;
