
function playGame(btn_id) {
  var playerImg = document.getElementById("playerImg");

  if (btn_id === "rock"){
    playerImg.src = "./imgs/rockP.png";
    console.log('rock');
  } else if (btn_id === "paper"){
    playerImg.src = "./imgs/paperP.png";
    console.log('paper');
  } else if (btn_id === "scissors"){
    playerImg.src = "./imgs/scissorsP.png";
    console.log("scissors");
  } else{
    console.log("error in the players choice");
  }
  
  var compImg = document.getElementById("compImg");

  compImgs = ["../imgs/rockc.png", "../imgs/paperC.png", "../imgs/scissorsC.png"];
  compPic = Math.floor(Math.random() * 3 + 1);
  console.log(compPic);
  if (compPic === 1){
    compImg.src = "./imgs/rockc.png";
  } else if (compPic === 2){
    compImg.src = "./imgs/paperC.png"
  } else if (compPic === 3) {
    compImg.src = compImgs[2];
  } else{
    console.log("error in the computers choice");
  }

  /*
  winner = document.getElementById("theWinner");
  if (btn_id === "rock" && compPic === 1){
    winner.innerHTML = "ITS A TIE!";
  } else if (btn_id === "rock" && compPic === 2) {
    winner.innerHTML = "You Lose!";
  } else if (btn_id === "rock" && compPic === 3){
    winner.innerHTML = "You Win!"
  }*/


}

