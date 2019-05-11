'use strict'

let promise = Promise.resolve("YEAH!");

let promise1 = Promise.reject("NOOO!");

console.log("1111111111");

promise
  .then(console.log, null)
  .catch(error => console.error(error))

console.log("2222222222");

promise1
.then((k) => console.log(k))
.catch(error => console.log(error))

console.log("3333333333");