var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    fulfill("Alright!");
    // reject(Error("It's an error! :/ "));
    // reject(onReject("Errorrr"));
  }, 300);
});

function onReject (error) {
  // console.log(error.message);
  console.log("inside onReject");
  return(error.message);
}

// promise
//   .then(null)
//   .then(console.log)
//   .catch(err => {
//     console.log("Error: " + err);
//     // onReject(err);
//   });

// const p = promise;
// console.log("promise = ", p);

const x = async() => {
  console.log("inside async");
  try {
    const v = await promise;
    console.log("success: ", v);
  } catch(err) {
    console.log("CATCH " + err.message);
  }
}

x();
// console.log("22222222222" + (999999999999 * 9999999999999));
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");
// console.log("22222222222");