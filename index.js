var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
var dice1=document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomDiceImage);
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomDiceImage2="images/dice"+randomNumber2+".png";
var dice2=document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
    
    }
    if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="Draw";
    }