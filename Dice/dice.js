

function diceGenerator() {
  var diceValue1=Math.floor((Math.random()*6))+1;
document.querySelectorAll('img')[0].src="./images/dice"+diceValue1+".png";
var diceValue2=Math.floor((Math.random()*6))+1;
document.querySelectorAll('img')[1].src="./images/dice"+diceValue2+".png";

if(diceValue1 > diceValue2)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!";
}
else if(diceValue1 < diceValue2)
{
  document.querySelector("h1").innerHTML = " 🚩 Player 2 wins!!";
}
else{
  document.querySelector("h1").innerHTML="Draw" ;
}
}


