// This game allows the user to play Rock Paper Scissors against the
// computer.

// We start by retrieving a random choice for the computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Get input from user
function getUserChoice() {
    userChoice = (prompt("Rock(0), Paper(1), or Scissors(2)?")).slice(0, 1).toLowerCase();
    if (userChoice === 0 | userChoice === "r") {
        return 0;
    } else if (userChoice === 1 | userChoice === "p") {
        return 1;
    } else if (userChoice === 2 | userChoice === "s") {
        return 2;
    } else if (userChoice === "") {
        alert("Please enter a choice!");
        return "No Response";
    } else {
        alert("Invalid Response!");
        return "Invalid Response"
    }
}

// Decide winner
function winner(computerChoice, userChoice) {
    if (computerChoice === 0 & userChoice === 1) {
        return "User";
    } else if (computerChoice === 0 & userChoice === 2) {
        return "Computer";
    } else if (computerChoice === 1 & userChoice === 2) {
        return "User";
    } else if (computerChoice === 1 & userChoice === 0) {
        return "Computer";
    } else if (computerChoice === 2 & userChoice === 0) {
        return "User";
    } else if (computerChoice === 2 & userChoice === 1) {
        return "Computer";
    } else {
        return "Tie";
    }
}