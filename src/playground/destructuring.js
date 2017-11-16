// const person = {
// 	name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 23
// 	}
// };


// const {age,name: firstName = 'Anonymous'} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${age} is ${firstName}`);

// const { city, temp: temperature } = person.location;
// if(temperature && city) {
// 	console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		// name: 'Penguin'
// 	}
// };

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName); // Penguin , self-published

// Array Destructuring

// const address = ['1299 S juniper Street', , 'Pennsylvania', '19147'];

// const [, city = 'New York', state,] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot', '$2.00', '$2.50', '$2.75'];

const [coffee = 'Latte', small, medium, large] = item;


console.log(`a medium ${coffee} costs ${medium}`)