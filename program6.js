'use strict'

function first() {
  return Promise.resolve("secret value");
}

function second(value) {
  return Promise.resolve(value);
}


const fv = first();
const sv = second(first());
console.log("fv: ", fv);
console.log("sv: ", sv);


// Two functions will be provided as global functions that you can use: first and second.

// Call the first function in your program. first() will return a promise that
// will be fulfilled with a secret value.

// Call the second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.



// let promise1 = Promise.reject("NOOO-1!");
// promise1
//   .then(null, error => console.error(error))
