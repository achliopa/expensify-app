import * as firebase from 'firebase';

// configure connection to db

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID
};

// connect to DB

firebase.initializeApp(config);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, db as default};

// db.ref().set({
// 	name: 'Andrew Mead',
// 	age: 26,
// 	isSingle: false,
// 	stressLevel: 9,
// 	job: {
// 		title: 'Software Engineer',
// 		company: 'NVIDIA'
// 	},
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'USA'
// 	}
// }).then(() => {
// 	console.log('data is saved');
// }).catch((e) => {
// 	console.log('This failed', e);
// });

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


// Fetch data from DB

// db.ref('job/title')
// 	.once('value')
// 	.then((snapshot)=> {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e)=>{
// 		console.log("error fetching data:",e);
// 	});

// db.ref().on('value', (snapshot) => { //callback
// 	console.log(snapshot.val());
// })

// const onValueChange = (snapshot) => {
// 	console.log(snapshot.val());
// };

// db.ref().on('value', onValueChange);


// setTimeout(() => {
// 	db.ref('location/country').set('Greece');
// }, 3500);

// setTimeout(() => {
// 	// db.ref().off();
// 	db.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
// 	db.ref('location/country').set('USA');
// }, 10500);

// db.ref().on('value',(snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// ARRAYS

// const notes = [{
// 	id: '12',
// 	title: 'First Note',
// 	body: 'This is a note'
// }, {
// 	id: '232fd',
// 	title: 'Second Note',
// 	body: 'This is another note'
// }];

// db.ref('notes').set(notes);

// const firebaseNotes = {
// 	rqweeqwrqwq: {
// 	title: 'First Note',
// 	body: 'This is a note'
// 	}, 
// 	rqwrqwwrwr: {
// 	id: '232fd',
// 	title: 'Second Note',
// 	body: 'This is another note'
// 	}
// };

// db.ref('notes').set(firebaseNotes);

// db.ref('notes').push({
// 	title: 'Second Note',
// 	body: 'This is another note'
// });

// db.ref('expenses').push({
// 	description: 'Gum',
// 	note: '',
// 	amount: 195,
// 	createdAt: 0
// });

// db.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: 1000
// });

// db.ref('expenses').push({
// description: 'Credit Card',
// 	note: '',
// 	amount: 4500,
// 	createdAt: -1000
// });

// db.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	});

// subscribe to value change

// db.ref('expenses')
// 	.on('value', (snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	});

// subscribe to child removed

// db.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// subscribe to child-change

// db.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// subscribe to child-add

// db.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
