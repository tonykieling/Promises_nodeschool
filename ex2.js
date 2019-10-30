const p = new Promise((fulfill, reject) => {
  // if (1 != 2)
  //   reject("REJECTED");

  setTimeout(() => {
    fulfill("FULLFILLED");
  }, 300);
});

p
  .then(console.log);
  // .catch(asd => console.log(asd + " is done"));