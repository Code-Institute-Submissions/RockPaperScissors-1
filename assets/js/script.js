/* Event is fired when the whole page has loaded */ 
window.addEventListener('load', function () {
     //select all elements
    const playerScoreBoard = document.getElementById('player-score');
    const computerScoreBoard = document.getElementById('comp-score');
    const showComputerChoice = document.getElementById('comp-choice');
    const showPlayerChoice = document.getElementById('player-choice');
    const availableChoices = document.querySelectorAll('.player-btn');   
    const showOutcome = document.getElementsByClassName('result');
    const sound = document.querySelector('#sound'); 
    
    /** Function to select players choices
     * set available choices
     * add event listener click to avilable choices 
     */
    function getPlayerChoices(e) {
        availableChoices.forEach(availableChoice => availableChoic.addEventListener('click', (e) => {
            playerChoice = e.target.getElementById // set available  options
            showPlayerChoice.innerText = playerChoice //upadate player choice text
        }));
        
        
    
    };

    function getComputerChoices() {
        //get random choice for computer
        //update computer choice text

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


