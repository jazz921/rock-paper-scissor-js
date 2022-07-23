let userScore = 0;
let compScore = 0;
const result_div = document.querySelector('.result');
const userScore_span = document.querySelector('.user-score');
const compScore_span = document.querySelector('.comp-score');
const rock_img = document.querySelector('#r');
const paper_img = document.querySelector('#p');
const scissor_img = document.querySelector('#s');
const actionMessage_div = document.querySelector('.action-message');

function randomChoices() {
    choices = ['r', 's', 'p'];
    let x = Math.floor(Math.random() * 3);
    return choices[x];
}

function letterToText(letter) {
    if (letter == "r") {
        return "Rock";
    }
    else if (letter == "p") {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function win(userChoice, compChoice) {
    userScore++;
    let choice_user = letterToText(userChoice);
    let choice_comp = letterToText(compChoice);
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${choice_user}(you) beats ${choice_comp}(comp)`;
    actionMessage_div.innerHTML = `You Win!`;
    let x = true;
    let y = false;
}

function lose(userChoice, compChoice) {
    compScore++;
    let choice_user = letterToText(userChoice);
    let choice_comp = letterToText(compChoice);
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${choice_user}(you) loses to ${choice_comp}(comp)`;
    actionMessage_div.innerHTML = `You Lose!`;
}

function tie(userChoice, compChoice) {
    let choice_user = letterToText(userChoice);
    let choice_comp = letterToText(compChoice);
    result_div.innerHTML = `${choice_user}(you) ties with ${choice_comp}(comp)`;
    actionMessage_div.innerHTML = `It's a Draw!`;
}


function game(letter) {
    let compChoice = randomChoices();
    switch (letter + compChoice) {
        // win case
        case "rs":
        case "sp":
        case "pr":
            win(letter, compChoice);
            break;
        // lose case
        case "sr":
        case "ps":
        case "rp":
            lose(letter, compChoice);
            break;
        // tie case
        case "rr":
        case "pp":
        case "ss":
            tie(letter, compChoice);
            break;
    }
}

rock_img.addEventListener('click', function() {
    game("r");
})

paper_img.addEventListener('click', function() {
    game("p");
})

scissor_img.addEventListener('click', function() {
    game("s");
})