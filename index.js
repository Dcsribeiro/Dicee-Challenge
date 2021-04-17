
// First thing you need to do is select the VAR in order to have random numbers

var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomNumber2 = Math.floor(Math.random() * 6)+1;

// Second step is to put the random number alonge with the extension file

image1 = "images/dice"+randomNumber1+".png";

image2 = "images/dice"+randomNumber2+".png";


// Finally, you can now use o querySelector

document.querySelectorAll("img")[0].setAttribute("src", image1); // This way of doing it shows that althoug you have 2 <img>, selecting the array [0] for querySelectorAll helps you select the exacly one you want to.

document.querySelector(".img2").setAttribute("src", image2); // This is a straight way of doing the same code above.

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!!";

} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 WINS!! 🚩";

} else {
  document.querySelector("h1").innerHTML = "Roll the dice again!"
}

function reloadThePage(){
    window.location.reload();
}
