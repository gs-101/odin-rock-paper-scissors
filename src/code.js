/**
SPDX-License-Identifier: GPL-3.0-or-later

This file is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License
(at your option) any later version.

This file is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this file.  If not, see <https://www.gnu.org/licenses/>.
 */

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

/** Plays the game for a totality of 5 rounds, declaring the winner at the end. */
function playGame() {
    /** Total score of the player. */
    let humanScore = 0;
    /** Total score of the computer. */
    let computerScore = 0;
    /** Message in case of ties. */
    const tieMessage = "A tie! Nobody wins.";
    /** Starting statement in case of a victory. */
    const winMessagePrefix = "You win!";
    /** Starting statement in case of defeat. */
    const lossMessagePrefix = "You lose!";
    /** Message shown in case of paper victory. */
    const paperWinMessage = "Paper covers rock.";
    /** Message shown in case of rock victory. */
    const rockWinMessage = "Rock breaks the scissors.";
    /** Message shown in case of scissors victory. */
    const scissorsWinMessage = "Scissors cut the paper.";
    const error = new RangeError("Unexpected game result");
    const gameWinMessage = "Game over. You win!";
    const gameLossMessage = "Game over. You lost!";

    /** Returns the result of the game in case the user chooses "rock". Uses
 COMPUTERCHOICE for comparison. */
    function getRockResult(computerChoice) {
        switch (computerChoice) {
        case "rock":
            console.log(tieMessage);
            break;
        case "paper":
            console.log(`${lossMessagePrefix} ${paperWinMessage}`);
            computerScore++;
            break;
        case "scissors":
            console.log(`${winMessagePrefix} ${rockWinMessage}`);
            humanScore++;
            break;
        }
        // No "default" case is needed, all inputs have already been checked.
    }

    /** Returns the result of the game in case the user chooses "paper". Uses
 COMPUTERCHOICE for comparison. */
    function getPaperResult(computerChoice) {
        switch (computerChoice) {
        case "rock":
            console.log(`${winMessagePrefix} ${paperWinMessage}`)
            humanScore++;
            break;
        case "paper":
            console.log(tieMessage);
            break;
        case "scissors":
            console.log(`${lossMessagePrefix} ${scissorsWinMessage}.`);
            computerScore++;
            break;
        }
    }

    /** Returns the result of the game in case the user chooses "scissors". Uses
 COMPUTERCHOICE for comparison. */
    function getScissorsResult(computerChoice) {
        switch (computerChoice) {
        case "rock":
            console.log(`${lossMessagePrefix} ${rockWinMessage}`)
            computerScore++;
            break;
        case "paper":
            console.log(`${winMessagePrefix} ${scissorsWinMessage}`);
            humanScore++;
            break;
        case "scissors":
            console.log(`${tieMessage}`);
            break;
        }
    }

    /** Plays the game for a single round, getting the results from the previous
functions. If the user's input is not one of the valid ones, viz. "rock",
"paper", "scissors", they are prompted again. */
    function playRound(humanChoice, computerChoice) {
        humanChoice = normalize(humanChoice);
        const warning = `Unexpected choice, must be either "rock", "paper" or
 "scissors". Try again.`;

        switch (humanChoice) {
        case "rock":
            return getRockResult(computerChoice);
        case "paper":
            return getPaperResult(computerChoice);
        case "scissors":
            return getScissorsResult(computerChoice);
        default:
            console.log(warning);
            playRound(getHumanChoice(), computerChoice);
        }
    }

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(gameWinMessage);
    } else if (humanScore < computerScore) {
        console.log(gameLossMessage);
    } else {
        console.log(error);
    }
}
