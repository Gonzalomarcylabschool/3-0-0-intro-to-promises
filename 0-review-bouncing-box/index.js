// We want to be able to change the number 
// inside of the box to reflect 
// the number of times the box has hit 
// the right wall.

// variable to select the element with the id of box
const box = document.querySelector('#box');
// variables to adjust the speed and location of the box
let x = 0;
let direction = 1;
let speed = 5;

const update = () => { // callback function
  // move the box
  x += speed * direction;// 0 + 5 * -1 = -5, 5 + 5 * 1 = 10, 10 + 5 * 1 = 15, 15 + 5 * 1 = 20, 20 + 5 * 1 = 25, 25 + 5 * 1 = 30, 30 + 5 * 1 = 35, 35 + 5 * 1 = 40, 40 + 5 * 1 = 45, 45 + 5 * 1 = 50, 50 + 5 * 1 = 55, 55 + 5 * 1 = 60, 60 + 5 * 1 = 65, 65 + 5 * 1 = 70, 70 + 5 * 1 = 75, 75 + 5 * 1 = 80, 80 + 5 * 1 = 85, 85 + 5 * 1 = 90, 90 + 5 * 1 = 95, 95 + 5 * 1 = 100, 100 + 5 * 1 = 105, 105 + 5 * 1 = 110, 110 + 5 * 1 = 115, 115 + 5 * 1 = 120, 120 + 5 * 1 = 125, 125 + 5 * 1 = 130, 130 + 5 * 1 = 135, 135 + 5 * 1 = 140, 140 + 5 * 1 = 145, 145 + 5 * 1 = 150, 150 + 5 * 1 = 155, 155 + 5 * 1 = 160, 160 + 5 * 1 = 165, 165 + 5 * 1 = 170, 170 + 5 * 1 = 175, 175 + 5 * 1 = 180, 180 + 5 * 1 = 185, 185 + 5 * 1 = 190, 190 + 5 * 1 = 195, 195 + 5 * 1 = 200, 200 + 5 * 1 = 205, 205 + 5 * 1 = 210, 210 + 5 * 1
  box.style.left = `${x}px`;

  // check for hitting the walls
  if (x > document.body.clientWidth) {// width of the page
    direction = -1;
    console.log('hit the right wall');
  }
  if (x < 0) {
    direction = 1;
    console.log('hit the left wall');
  }
  console.log(document.body.clientWidth)
  console.log(x);
}

const main = () => {
  setInterval(update, 50)// 50 milliseconds
  console.log('starting');
}

main();