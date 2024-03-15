var ran_no1 =Math.ceil(Math.random() * 6)+1;
var ran_diceImg="dice" +ran_no1+ ".png";
var Img_path1 = "images/" + ran_diceImg;

document.querySelectorAll("img")[0].setAttribute("src",Img_path1);

var ran_no2 =Math.ceil(Math.random() * 6)+1;
var ran_diceImg2="dice" +ran_no2+ ".png";
var Img_path2 = "images/" + ran_diceImg2;

document.querySelectorAll("img")[1].setAttribute("src",Img_path2);

if (ran_no1 > ran_no2) {
    document.querySelector("h1").innerHTML = "Winner : Player 1  🚩";
  }
  else if (ran_no2 > ran_no1) {
    document.querySelector("h1").innerHTML = "Winner: Player 2  🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  


  function fun(){

    document.body.classList.toggle("dark-theme")
 
 let but = document.getElementById("button");
 if(but.innerHTML == "Normal Mode"){
     button.innerHTML = "Dark Mode";
 }
 else{
     button.innerHTML = "Normal Mode";
 }
 }