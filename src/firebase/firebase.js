import * as firebase from 'firebase';

// configure connection to db

const config = {
    apiKey: "AIzaSyApcx241_bNzu2MDDU5oMTpVGFrDnIruBY",
    authDomain: "agileng-expensify.firebaseapp.com",
    databaseURL: "https://agileng-expensify.firebaseio.com",
    projectId: "agileng-expensify",
    storageBucket: "agileng-expensify.appspot.com",
    messagingSenderId: "485045959354"
};

// connect to DB

firebase.initializeApp(config);

const db = firebase.database();

db.ref().set({
	name: 'Andrew Mead',
	age: 26,
	isSingle: false,
	stressLevel: 9,
	job: {
		title: 'Software Engineer',
		company: 'NVIDIA'
	},
	location: {
		city: 'Philadelphia',
		country: 'USA'
	}
}).then(() => {
	console.log('data is saved');
}).catch((e) => {
	console.log('This failed', e);
});

// db.ref().set('This is my data');


// UPDaTE

// db.ref('age').set(27);
// db.ref('location/city').set('New York');
// db.ref('height').set('1.75');
// db.ref('weight').set(80);

// db.ref('attributes').set({
// 	height: 175,
// 	weight: 75
// }).then(() => {
// 	console.log('attributes are saved');
// }).catch((e) => {
// 	console.log('This failed', e);
// });

//Remove

// db.ref().remove().then(()=> {
// 	console.log('removed');
// }).catch((e)=> {
// 	console.log(e);
// });

//db.ref('isSingle').set(null);

// EFFICIENT UPDATE IN ONE CALL

// db.ref().update({
// 	name: 'Sakis Chliopanos',
// 	age: 34,
// 	job: 'Engineer',
// 	// location: {
// 	// 	city: 'San Francisco'
// 	// },
// 	'location/country': 'UK'
// });

// db.ref().update({
// 	stressLevel: 8,
// 	job: {
// 		company: 'Microsoft'
// 	},
// 	location: {
// 		city: 'Seattle'
// 	}
// });
