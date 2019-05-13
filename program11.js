'use strict'

const alwaysThrows = () => {throw new Error("OH NOES")}

function iterate(intArg) {
  console.log(intArg);
  return intArg + 1;
}

Promise.resolve(iterate(1))
  .then(n => iterate(n))
  .then(n => iterate(n))
  .then(alwaysThrows)
  .then(n => iterate(n))
  .then(n => iterate(n))
  .catch(error => console.log(error.message))

/* ## Task

*/