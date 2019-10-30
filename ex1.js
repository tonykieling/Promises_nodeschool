const x = (time) => setTimeout(() => {
  console.log("time is ", time * 1000 + "s");
}, time * 1000);

x(1);