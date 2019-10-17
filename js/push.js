// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAzQ6nHNT0D8OsBDF5C3UMPLI3p8EKiDgo',
	authDomain: 'push-e0c02.firebaseapp.com',
	databaseURL: 'https://push-e0c02.firebaseio.com',
	projectId: 'push-e0c02',
	storageBucket: '',
	messagingSenderId: '572888864837',
	appId: '1:572888864837:web:f031b37c199428c91fab2c',
	measurementId: 'G-30NDF7FVTW'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// function to updateCount
var push = document.getElementById('push');
push.addEventListener('click', async function() {
	getIp();
});

// function to getIP address
async function getIp() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.ipify.org/?format=json', true);

	request.onload = function() {
		if (this.status >= 200 && this.status < 400) {
			// Success!
			var data = JSON.parse(this.response);
			var updateCountRef = firebase.database().ref('pushCount/userData');
			updateCountRef
				.orderByChild('ip')
				.equalTo(data.ip)
				.once('value')
				.then(function(snapshot) {
					if (!snapshot.val()) {

						updateCountRef.push({ count: 1, ip: data.ip });
						return;
                    }
                    let countOfusers = Object.keys(snapshot.val()).length + 1;
                    document.getElementById("userCount").innerHTML = "User Count: " + countOfusers ;
					snapshot.forEach(function(data) {
						let val = snapshot.val();
						firebase
							.database()
							.ref('pushCount/userData/' + data.key)
							.update({ count: val[data.key].count + 1, ip: val[data.key].ip });
					});
				})
				.catch(function(reason) {
					console.log(reason);
					updateCountRef.push({ count: 1, ip: data.ip });
				})
				.finally(() => {
					var updateCount = firebase.database().ref('pushCount/count');
					updateCount.transaction(function(theCount) {
						var counter = theCount + 1;
						document.getElementById('count').innerHTML = 'count: ' + counter;
						return counter;
					});
				});
		} else {
			console.log('error');
		}
	};
	request.onerror = function() {
		// There was a connection error of some sort
	};
	request.send();
}
