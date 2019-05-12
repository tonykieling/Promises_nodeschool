'use strict'

let promise = new Promise((fulfill, reject) => {
  fulfill("PROMISE VALUE");
})

// let onReject = (error) => {
//   console.log(error.message);
// }

// let onReject = (error) => {
//   console.log(error.message);
// }

promise
  .then(console.log, null)

console.log("MAIN PROGRAM");