'use strict'

let promise = new Promise((fulfill, reject) => {
  fulfill("I FIRED");
  reject(new Error("I DID NOT FIRE"));
})

let onReject = (error) => {
  console.log(error.message);
}

// let onReject = (error) => {
//   console.log(error.message);
// }

promise
  .then(console.log, onReject)
  