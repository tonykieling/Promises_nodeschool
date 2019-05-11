'use strict'

let promise1 = Promise.reject("NOOO1!");

let promise2 = Promise.reject("NOOO2!");

let promise3 = Promise.resolve("YEAH!!")

promise1
  .then(null, error => console.error(error))


promise2
  .then((k) => console.log(k))
  .catch(error => console.log(error))

  
promise3
  .then(message => console.log(message))
  .catch(error => console.error(error))