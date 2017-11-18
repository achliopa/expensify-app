const promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		// resolve({
		// 	name: 'Sakis',
		// 	age: 28
		// });
		reject('sthing went wrong');
	},3500);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);
}).catch((error) => {
	console.log(error);
});

// or 

// promise.then((data) => {
// 	console.log('1', data);
// }, (error) => {
// 	console.log(error);
// });

console.log('after');