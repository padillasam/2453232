const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve("success!!!");
  } else {
    reject("Fail");
  }
})
  .then((value) => {
    console.log(value);
    return "we";
  })
  .then((value) => {
    console.log(value);
    return "can";
  })
  .then((value) => {
    console.log(value);
    return "chain";
  })
  .then((value) => {
    console.log(value);
    return "promises";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log("............", value);
  });

const exercise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Start counting!!!");
  } else {
    reject("Fail");
  }
});
exercise
  .then((value) => {
    console.log(value);
    return "one";
  })
  .then((value) => {
    console.log(value);
    return "two";
  })
  .then((value) => {
    console.log(value);
    return "three";
  })
  .then((value) => {
    console.log(value);
    return "four";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log("............", value);
  });

