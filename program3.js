'use strict'

let promise = new Promise((fulfill, reject) => {

    setTimeout(() => {
      reject(new Error("REJECTED!"));
    }, 300)
  })

function onReject(error) {
  console.log(error.message);
}

promise
  .then(null, onReject)


// 'use strict'

// let promise = new Promise((fulfill, reject) => {

//   try {
//     // console.log("S");
//     fulfill("OKKK")
//   } catch(error) {
//     reject("NNNNOK")
//   }
//     // setTimeout(() => {
//     //   reject(new Error("REJECTED!"));
//     // }, 800)
// })

// function onReject(error) {
//   console.log("tof", typeof error);
//   return(error.message)
// }

// promise
//   // .then(null, onReject)
//   .then("null", console.log(onReject("asd")))
//   // .then(console.log("SUCC"), console.log("okay"))
//   .catch(err => console.log(err))
  