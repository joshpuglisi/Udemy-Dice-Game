var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var imgSrc1 = "images/dice" + randomNum1 + ".png";
var imgSrc2 = "images/dice" + randomNum2 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", imgSrc1);
document.getElementsByClassName("img2")[0].setAttribute("src", imgSrc2);

if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Refresh Me";
}