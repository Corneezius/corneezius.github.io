// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzQ6nHNT0D8OsBDF5C3UMPLI3p8EKiDgo",
  authDomain: "push-e0c02.firebaseapp.com",
  databaseURL: "https://push-e0c02.firebaseio.com",
  projectId: "push-e0c02",
  storageBucket: "",
  messagingSenderId: "572888864837",
  appId: "1:572888864837:web:f031b37c199428c91fab2c",
  measurementId: "G-30NDF7FVTW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function push() {
  // Increment pushCount by 1.
  var updatePush = firebase.database().ref('pushCount/count');
  updatePush.transaction(function(theCount) {
    // if (theCount === null) {
    //   return {pushCount: {count:1}}
    // }
    // else {
        console.log(theCount +1);
        return theCount + 1;
    }
    // If users/ada/rank has never been set, currentRank will be `null`.
  });
}
