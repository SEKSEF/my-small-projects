const myButton = document.getElementById("mybtn");
const myLabel = document.getElementById("mylbl");
const min = 1;
const max = 100;
let randomNumber;

myButton.onclick = function() {
    randomNumber =Math.floor(Math.random() * max) +min ;
    myLabel.textContent =randomNumber;
}
