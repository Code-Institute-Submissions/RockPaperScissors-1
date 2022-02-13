/* Event is fired when the whole page has loaded */
window.addEventListener('load', function () {
    //select all elements
    const playerScoreBoard = document.getElementById('player-score');
    const computerScoreBoard = document.getElementById('comp-score');
    const showComputerChoice = document.getElementById('comp-choice');
    const showPlayerChoice = document.getElementById('player-choice');
    const availableChoices = document.querySelectorAll('.player-btn');
    console.log(availableChoices);
    const showOutcome = document.getElementsByClassName('result');
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
        playerChoice = e.target.getElementById // set available  options
        showPlayerChoice.innerHTML = playerChoice //upadate player choice text
        getComputerChoices();
    }));





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
        showComputerChoice.innerHTML = computerChoice;   //update computer choice text

    };

    function pickWinner() {
        // set possible winers
        // update outcome text
        // update winner score

    };

    function startGame() {

    };

    //reset button 











});