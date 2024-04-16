function rollDice() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Dimpu won...hhehehee";
} 
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Babbu won....by fluke";
}
else {
    document.querySelector("h1").innerHTML = "draw(dimpu won by 0.1%)";
}

}