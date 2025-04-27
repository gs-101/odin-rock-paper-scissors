/** Total score of the player. */
let humanScore = 0;
/** Total score of the computer. */
let computerScore = 0;

/** Returns a pseudorandom int between 0 and a chosen maximum MAX. Works in a
 exclusive manner. */
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

/** Returns a pseudorandom string between "rock", "paper" or "scissors". This is
 used to represent the adversary's choice in the game. */
function getComputerChoice() {
    let randomNumber = getRandom(3);
    const error = new RangeError("Unexpected value, must be between 0 and 2.");

    switch (randomNumber) {
    // break; is not needed because the function ends after the return.
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
    default:
        throw error;
    }
}

/** Asks the user for input and returns it. */
function getHumanChoice() {
    let choice = prompt("Your move:");

    return choice;
}

/** Returns a version of the user's inputs compatible with the casing used
throughout the codebase—which is none, there is no casing. */
function normalize(humanChoice) {
    humanChoice = humanChoice.toLocaleLowerCase().trim();

    return humanChoice;
}
