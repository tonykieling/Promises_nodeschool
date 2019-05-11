'use strict'

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