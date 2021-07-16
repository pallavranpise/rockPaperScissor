function playerPlay(y) {

    switch (y.toLowerCase()) {

        case "rock":
            hands = "rock";
            break;
        case "paper":
            hands = "paper";
            break;
        case "scissor":
            hands = "Scissor";
            break;

        default:
            hands = "roo";

    }
    return hands;

};

document.getElementById("okay").onclick = function() {
    let yourhand = prompt("type sign");
    playerPlay(yourhand);
    display(playerPlay());
    display(computerPlay());
    //result;
};



function computerPlay() {

    switch (Math.floor(Math.random() * 3)) {

        case 0:
            hands = "rock";
            break;
        case 1:
            hands = "paper";
            break;
        case 2:
            hands = "Scissor";
            break;

    }
    return hands;
};


function display(playerSign) {
    if (playerSign == playerPlay()) {
        console.log(`           you chose ${playerSign}`);
    } else {
        console.log(`       computer chose ${playerSign}`);
    }



};
