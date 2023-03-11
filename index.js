var rand1 = Math.floor(Math.random()*6)+1;
var rand2 = Math.floor(Math.random()*6)+1;

var im1 = document.querySelectorAll("img")[0].src = "images/dice" + rand1 +".png";
var im2 = document.querySelectorAll("img")[1].src = "images/dice" + rand2 +".png";

if(rand1>rand2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(rand1<rand2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
document.querySelector("h1").innerHTML = "Draw!";
