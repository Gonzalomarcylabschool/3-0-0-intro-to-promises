// const promise = new Promise((resolve, reject) => { //built a promise object
//   if (false) {
//     resolve('You are one dope developer!');
//   } else {
//     reject(new Error('You failed, try again!'));
//   }
// });

// promise
//   .then((result) => {
//     console.log(`You promise is good: ${result}`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })

// promiseThree = new Promise((resolve, reject) => {
//   if (1 + 2 === 3) {
//     resolve('4 would be wrong!');
//   } else {
//     reject(new Error('You do not know math'));
//   }
// });

// promiseThree
//   .then((result) => {
//     console.log(`You promise is good: ${result}`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })


// const promiseTwo = new Promise((resolve, reject) => {
//   let num = 0;
//   num = 1 + 2;
//     if (num) {
//       resolve(num);
//     } else {
//       reject(new Error('no value is here'));
// };
//   });

//   promiseTwo
//     .then((value) => {// executes if `resolve()` promiseTwo was invoked should be 3
//       console.log(`the value is: ${value}`);//
//       const newValue = value + 1;
//       return newValue;// new promise
//     }).then((promiseValue) => {
//       console.log(`the value is: ${promiseValue}`);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     })


    const newArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    
    const newArrayTwo = [1, 2, 3, 4, 5];

    const promiseFour = new Promise((resolve, reject) => {
      if (newArray.length > 5) {
        resolve(newArray);
      } else {
        reject(new Error('Array is too small'));
      }
    });

    promiseFour
      .then((array) => {
        console.log(`Array is good: ${array}`);
        const newArray = array.map((num) => num * 2);
        return newArray;
      })
      .then((newArray) => {
        console.log(`New Array is good: ${newArray}`);
      })
      .catch((error) => {
        console.log(error.message);
      })