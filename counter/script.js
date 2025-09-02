const labelCount = document.getElementById("labelCount");
const decrease = document.getElementById("btnDecrease");
const reset = document.getElementById("btnRreset");
const increase = document.getElementById("btnIncrease");

let count = 0;

increase.onclick = function () {
  count++;
  labelCount.textContent = count;
};

decrease.onclick = function () {
  count--;
  labelCount.textContent = count;
};

reset.onclick = function () {
  count = 0;
  labelCount.textContent = count;
};
