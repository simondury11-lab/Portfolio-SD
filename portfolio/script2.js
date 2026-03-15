
let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

let guess = document.getElementById("guess").value;

let message = document.getElementById("message");

if (guess == secretNumber) {
message.textContent = "Bravo ! Tu as trouvé le nombre.";
}

else if (guess < secretNumber) {
message.textContent = "Trop petit !";
}

else {
message.textContent = "Trop grand !";
}

}