const asyncAction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      resolve(random); // this value will be passed to the .then() callback
    } else {
      reject(new Error(random)); // this value will be passed to the .catch() callback
    }
  }, 500);
}); 

myFirstPromise = asyncAction();

myFirstPromise
  .then((data) => { // executes if `resolve()` was invoked
    console.log(`Fulfilled! ${data}`)
  })
  .catch((error) => { // executes if `reject()` was invoked
    console.error(`Rejected :( ${error.message}`)
  })