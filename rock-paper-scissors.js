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