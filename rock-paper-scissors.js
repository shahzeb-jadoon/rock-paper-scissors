// This game allows the user to play Rock Paper Scissors against the
// computer.

// We start by retrieving a random choice for the computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Get input from user
function getUserChoice() {
    return prompt("Rock(0), Paper(1), or Scissors(2)?");
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