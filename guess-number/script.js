function startGame() {
  let minNum = 1;
  let maxNum = 100;
  let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

  let guese;
  let attemps = 0;
  let running = true;

  while (running == true) {
    guese = window.prompt(`Guess a Number between ${minNum} and ${maxNum}`);
    guese = Number(guese);

    if (isNaN(guese)) {
      window.alert(`Please enter a valid number`);
    } else if (guese < minNum || guese > maxNum) {
      window.alert(`Please enter a valid number`);
    } else {
      if (guese < answer) {
        window.alert(`TOO LOW! TRY AGAIN!`);
      } else if (guese > answer) {
        window.alert(`TOO HIGH! TRY AGAIN!`);
      } else {
        window.alert(
          `CORRECT! the answer was ${answer}. It took you ${attemps} attemps `
        );
        running = false;
      }
      attemps++;
      if (attemps > 5) {
        window.alert(`FK LOOOOSEEEEEEEEEEEEEER`);
        running = false;
      }
    }
  }
}
