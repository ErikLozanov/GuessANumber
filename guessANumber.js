let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");

let answer = Math.floor(Math.random() * 10) + 1;

let no_of_guesses = 0;
let guessed_nums = [];

function play() {
  let user_guess = document.getElementById("guessNum").value;

  if (user_guess < 1 || user_guess > 10) {
    alert("Please enter a number between 1 and 100");
  } else {
    guessed_nums.push(user_guess);
    no_of_guesses++;
  }
  if (user_guess > answer) {
    msg1.textContent = "Your guess is incorrect. Try a lower number!";
    msg2.textContent = `No. of guesses: ${no_of_guesses}`;
    msg3.textContent = `Guessed Numbers are: ${guessed_nums}`;
  } else if (user_guess < answer) {
    msg1.textContent = "Your guess is incorrect. Try a higher number!";
    msg2.textContent = `No. of guesses: ${no_of_guesses}`;
    msg3.textContent = `Guessed Numbers are: ${guessed_nums}`;
  } else {
    msg1.textContent = "Congratulations you guessed the number:" + answer;
    msg2.textContent = `No. of guesses: ${no_of_guesses}`;
    msg3.textContent = `Guessed Numbers are: ${guessed_nums}`;
  }
}
