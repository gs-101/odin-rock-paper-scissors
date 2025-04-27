/** Returns a pseudorandom int between 0 and a chosen maximum MAX. Works in a
 exclusive manner. */
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

/** Returns a pseudorandom string between "rock", "paper" or "scissors". This is
 used to represent the adversary's choice in the game. */
function getComputerChoice() {
    let randomNumber = getRandom(3);

    switch (randomNumber) {
    // break; is not needed because the function ends after the return.
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
    default:
        throw new RangeError("Unexpected value, must be between 0 and 2.");
    }
}
