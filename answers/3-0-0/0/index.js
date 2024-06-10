const box = document.querySelector('#box');
let x = 0;
let direction = 1;
let speed = 20;
let count = 0;

const update = () => {
  // move the box
  x += speed * direction;
  box.style.left = `${x}px`;

  // check for hitting the walls
  if (x > document.body.clientWidth) {
    direction = -1;
    count++;
    console.log('hit right wall');
    console.log(count);
    document.querySelector('#box').innerText = count;
  }
  if (x < 0) {
    direction = 1;
  }
}

const main = () => {
  setInterval(update, 50)
  console.log('starting');
}

main();