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

var push = document.getElementById('push');



push.addEventListener('click', function push() {

  var updatePush = firebase.database().ref('pushCount/count');
  updatePush.transaction(function(theCount) {

        console.log(theCount);
        return theCount + 1;
    });

}, false);
