myInput = document.getElementById("myTxt");
myButton = document.getElementById("myButton");
myResulta = document.getElementById("myRslt");

let age;

myButton.onclick = function () {
  age = myInput.value;
  age = Number(age);

  if (age > 120) {
    myResulta.textContent = `You should be dead or are you a vampire?`;
  } else if (age === 0) {
    myResulta.textContent = `You can't enter. You were just born.`;
  } else if (age >= 120) {
    myResulta.textContent = `You are TOO OLD to enter this site`;
  } else if (age >= 18) {
    myResulta.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    myResulta.textContent = `Your age can't be below 0`;
  } else {
    myResulta.textContent = `You must be 18+ to enter this site`;
  }
};
