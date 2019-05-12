'use strict'

let promise = new Promise((fulfill, reject) => {

    setTimeout(() => {
      fulfill("FULFILLED!");
    }, 300)
  })

promise
  .then(() => {
  console.log("FULFILLED!");
  })
  // .catch((asd) => console.log("error: ", asd))





// const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')); // 'Hello!'