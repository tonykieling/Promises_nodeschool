'use strict'

// const content = "{\"config\":\"script\}"
// const content = `{"aaa":"bbb",}` //bad json

function parsePromised(msg) {
  return new Promise((res, rej) => {
    try {
      res(JSON.parse(msg))
    } catch(e) {
      rej(e.message)
    }
  })
}

parsePromised(content)
  .then(console.log, console.log)

/* ## Task
Let's build exactly the system discussed above.
Some invalid JSON will be available on process.argv[2].

* Build a function called `parsePromised` that creates a promise, performs `JSON.parse` in a `try`/`catch` block, and 
fulfills or rejects the promise depending on whether an error is thrown.
**Note:** your function should synchronously return the promise!
* Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.
 */

// Oficial answer:
// 'use strict';
    
// function parsePromised(json) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// function onReject(error) {
//   console.log(error.message);
// }

// parsePromised(process.argv[2])
// .then(null, onReject);
