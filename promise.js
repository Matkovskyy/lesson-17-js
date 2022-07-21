// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");

// ------Finally------
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// -----Цепочка промисов-----
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

//   -------Promise.all--------
const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
    .catch(error => console.log(error));
//   ----- Promise.race виконається тільки promiseA-----

