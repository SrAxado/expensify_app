//
// Object Desctructuring
//

// const person = {
//   name: 'Andrew',  
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const {name: nome = 'Zé', age} = person;
// const {temp: temperature, city} = person.location;

// console.log(`${nome} is ${age}.`);
// console.log(`It's ${temperature}ºF in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(`The publisher name is ${publisherName}`);


//
// Array Desctructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// // const [street, city, state, zip] = address;
// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name,, mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}.`);