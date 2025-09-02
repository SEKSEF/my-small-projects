const myCheckbox = document.getElementById("myCheckbox");
const myLabel = document.getElementById("myLabel");
const myVisa = document.getElementById("myVisa");
const myMasterCard = document.getElementById("myMasterCard");
const myPaypal = document.getElementById("myPaypal");
const mySubmit = document.getElementById("mySubmit");
const myResulta = document.getElementById("myResulta");
const payment = document.getElementById("payment");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    myResulta.textContent = `You are subscribed ! `;
  } else {
    myResulta.textContent = `You are NOT subscribed ! `;
  }

  if (myVisa.checked) {
    payment.textContent = `You are paying with VISA `;
  } else if (myMasterCard.checked) {
    payment.textContent = `You are paying with Master Card `;
  } else if (myPaypal.checked) {
    payment.textContent = `You are paying with PayPal `;
  } else {
    payment.textContent = `You must select a payment type `;
  }
};
