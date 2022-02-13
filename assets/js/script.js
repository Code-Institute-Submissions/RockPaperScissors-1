/* Event is fired when the whole page has loaded */
window.addEventListener('load', function () {
    //select all elements
    const playerScoreBoard = document.getElementById('player-score');
    const computerScoreBoard = document.getElementById('comp-score');
    const showComputerChoice = document.getElementById('comp-choice');
    const showPlayerChoice = document.getElementById('player-choice');
    const availableChoices = document.querySelectorAll('.player-btn');
    console.log(availableChoices);
    const showOutcome = document.getElementById('result');
    console.log(showOutcome);
    const startOver = document.getElementById('reset');
    console.log(startOver);
    const sound = document.querySelector('#sound');

    // create variables
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;

    /** 
     * Function to select players choices
     * set available choices
     * add event listener click to avilable choices 
     */
    availableChoices.forEach(availableChoice => availableChoice.addEventListener('click', (e) => {
        playerChoice = e.target.id // set available  options
        showPlayerChoice.innerHTML = playerChoice //upadate player choice text
        getComputerChoices();
        pickWinner();
    }));



    /**
     * Get random choice for computer
     * pick choice
     * print computer choice to screen
     */

    function getComputerChoices() {
        let randomNumber = Math.floor(Math.random() * 3); //get random choice for computer from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        if (randomNumber === 0) {
            computerChoice = 'rock'
        }
        if (randomNumber === 1) {
            computerChoice = 'paper'
        }
        if (randomNumber == 2) {
            computerChoice = 'scisorrs'
        }
        showComputerChoice.innerHTML = computerChoice; //update computer choice text

    };
    // function  to pick wiiner code from https://stackoverflow.com/questions/66247447/need-help-for-solving-switch-case-statement-for-rock-paper-scissors
    function pickWinner() {
        let moves = playerChoice + computerChoice;
        switch (moves) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                showOutcome.innerText = 'YOU WIN!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                sound.setAttribute('src', 'assets/sound/winner.mp3');
                sound.play();
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                showOutcome.innerText = 'YOU LOOSE!'
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                sound.setAttribute('src', 'assets/sound/lost.mp3');
                sound.play();
                break;
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                showOutcome.innerText = 'ITS A DRAWWW!!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                sound.setAttribute('src', 'assets/sound/draw.mp3');
                sound.play();
                break;
        }
    }        //reset button relod window set score to 0
    startOver.addEventListener('click', () => {
        this.window.location.reload();
    });


});