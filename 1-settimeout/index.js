// console.log('starting!');
// setTimeout(() => { // wait 3 seconds then...
//   console.log(1)
// }, 0)

// setTimeout(() => { // wait 1 seconds then...
//   console.log(2)
// }, 1000)

// setTimeout(() => { // wait 2 seconds then...
//   console.log(3)
// }, 2000)
// console.log('done!');

console.log('starting!');
setTimeout(() => { // wait 3 seconds then...
  console.log(1)
  setTimeout(() => { // wait 1 seconds then...
    console.log(2)
    setTimeout(() => { // wait 2 second then...
      console.log(3)
      console.log('done!');
    }, 2000)
  }, 1000)
}, 3000)