// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
    let options = ["scissors", "paper", "rock"];
    const p1w = "Player 1 won!";
    const p2w = "Player 2 won!";

    if (p1 === options[0] && p2 === options[1]) return p1w;
    if (p1 === options[1] && p2 === options[2]) return p1w;
    if (p1 === options[2] && p2 === options[0]) return p1w;
    if (p1 === p2) return "Draw!";
    return p2w;
};

module.exports = rps;