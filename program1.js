'use strict'

// ### Very basic signature
// let myPromise = Promise.reject("this is a promise REJECT");
// let myPromise = Promise.reject("this is a promise RESOLVE OK");

// myPromise
//   .then(console.log)
//   .catch(console.log)

let promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    // console.log("FULFILLED!")
  }, 300);

})

promise.then(() => {
  console.log("FULFILLED!");
})






// const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')); // 'Hello!'