 /* Set a counter for the score */
  var playerWins = 0;
  var compWins = 0;
  var tieGames = 0;

function playGame(btn_id) {
/*   var playerWins = localStorage.playerWin;
  var compWins = localStorage.compWin;
  var tieGames = localStorage.tieGames;

  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  } */


  /* Change the picture for the player */
  var playerImg = document.getElementById("playerImg");
  if (btn_id === "rock"){
    playerImg.src = "./imgs/rockP.png";
  } else if (btn_id === "paper"){
    playerImg.src = "./imgs/paperP.png";
    
  } else if (btn_id === "scissors"){
    playerImg.src = "./imgs/scissorsP.png";
    
  } else{
    console.log("error in the players choice");
  }
  
  /* Change the picture for the computer */
  var compImg = document.getElementById("compImg");
  compImgs = ["../imgs/rockc.png", "../imgs/paperC.png", "../imgs/scissorsC.png"];
  compPic = Math.floor(Math.random() * 3 + 1);
  console.log(compPic);
  if (compPic === 1){
    /* compImg.classList.add('animated','bounceIn'); */
  } else if (compPic === 2){
    compImg.src = "./imgs/paperC.png"
  } else if (compPic === 3) {
    compImg.src = "./imgs/scissorsC.png"
  } else{
    console.log("error in the computers choice");
  }



 /* Decide a winner and change the score */
  winner = document.getElementById("theWinner");
  if ((btn_id === "rock" && compPic === 1) || 
  (btn_id === "paper" && compPic === 2) || 
  (btn_id === "scissors" && compPic === 3)) {
    winner.innerHTML = "ITS A TIE!";
    tieGames += 1;
  } else if ((btn_id === "rock" && compPic === 2) || 
  (btn_id === "paper" && compPic === 3) || 
  (btn_id === "scissors" && compPic === 1))  {
    winner.innerHTML = "You Lose!";
    compWins += 1;
  } else if ((btn_id === "rock" && compPic === 3) || 
  (btn_id === "paper" && compPic === 1) || 
  (btn_id === "scissors" && compPic === 2)) {
    winner.innerHTML = "You Win!";
    playerWins += 1;
  }

  /* changes the score on the UI */
  document.getElementById("scorePlayer").innerHTML = playerWins;
  document.getElementById("scoreComp").innerHTML = compWins;


 

  console.log("Tie Games: ", tieGames);

}

