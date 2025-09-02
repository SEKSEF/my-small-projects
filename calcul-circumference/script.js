let radius;
const PI = 3.14159;
let circumference;

document.getElementById("myB").onclick = function () {
  radius = document.getElementById("radius").value;

  radius = Number(radius);
  circumference = 2 * PI * radius;

  document.getElementById(
    "try"
  ).textContent = `The circumference is : ${circumference}cm`;
};
