var randomnum = Math.floor(Math.random() * 6) + 1;
var image = "dice" + randomnum + ".png";
var images = document.querySelectorAll("img")[0];
images.setAttribute("src", image);

var randomnum1 = Math.floor(Math.random() * 6) + 1;
var image1 = "dice" + randomnum1 + ".png";
var images1 = document.querySelectorAll("img")[1];
images1.setAttribute("src", image1);
if (randomnum > randomnum1) {
    document.querySelector("h1").innerHTML = "Player 1 won the game ";
}
else if(randomnum < randomnum1){
    document.querySelector("h1").innerHTML = "player 2 won the game  ";


}else{document.querySelector("h1").innerHTML="Draw,try once again"

}
