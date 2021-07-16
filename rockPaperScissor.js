let playerChoice;
let computerChoice;

function computerPlay() {
    number = (Math.floor(Math.random() * 3) + 1);

    let hands = "";

    switch (number) {
        case 1:
            hands = "rock";
            break;
        case 2:
            hands = "paper";
            break;
        case 3:
            hands = "scissor";
            break;
        default:
            hands = "uiuiui";
    };

    console.log(`comp did ${hands}`);

    return hands;
};

function playerPlay() {
    let SIGN = prompt("type sign");
    let sign = SIGN.toLowerCase();
    let hands = "";

    switch (sign) {
        case "rock":
            hands = "rock";
            break;
        case "paper":
            hands = "paper";
            break;
        case "scissor":
            hands = "scissor";
            break;
        default:
            hands = "retry";
            console.log(`invalid sign ${SIGN } ${hands} `);

    };

    console.log(`player did ${hands}`);

    return hands;

};

function result(playerChoice, computerChoice) {

    let match = "idk";

    if (computerChoice == playerChoice) {
        match = "tied";
    } else
    if ((computerChoice == "paper") && (playerChoice == "rock")) {
        match = "lost";
    } else
    if ((computerChoice == "scissor") && (playerChoice == "paper")) {
        match = "lost";
    } else
    if ((computerChoice == "rock") && (playerChoice == "scissor")) {
        match = "lost";
    } else {
        match = "won";
    };
    console.log(`player ${match} against computer`);
};


document.getElementById("okay").onclick = function() {

    playerChoice = playerPlay();
    computerChoice = computerPlay();
    result(playerChoice, computerChoice);
};
