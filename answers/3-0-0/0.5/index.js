const callBackFunc = () => {
  console.log('the button has been clicked!');
}
console.log('running code');
document.querySelector('#clickButton').addEventListener('click', callBackFunc);
