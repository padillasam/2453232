const exercise2 = new Promise((resolve, reject) => {
  if (true) {
    let x = 1;
    //resolve("Start counting!!!",x);
    // setTimeout(() => {
    //     resolve(x);
    // }, 1000);
    resolve(x);
  } else {
    reject("Fail");
  }
});
exercise2
  .then((value) => {
    //console.log(value);
    console.log("then 1", value);
    //value++;
    return value+1;
  })
  .then((value) => {
    setTimeout(() => {
      console.log("then 2", value);
    },value+1000);
    //value++;
    return value+1;
  })
  .then((value) => {
    setTimeout(() => {
      console.log("then 3", value);
    }, 1000+value);
    //value++;
    return value+1;
  })
  .then((value) => {
    setTimeout(() => {
      console.log("then 4", value);
    }, 1000+value);
    //value++;
    return value+1;
  })
  .then((value) => {
    setTimeout(() => {
      console.log("then 5", value);
    }, 1000+value);
    //value++;
    return value;
  })
  .catch((value) => {
    console.log("............", value);
  });
