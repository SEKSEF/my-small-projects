const myButton = document.getElementById("mybtn");
const myLabel = document.getElementById("mylbl");

const min = 1;
const max = 100;

myButton.onclick = function () {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  myLabel.textContent = `🎯 Your number: ${randomNumber}`;
};