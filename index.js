
// myFunction should be called if player first wins
function myFunction1(){
    // document.querySelector("h1").setAttribute("Class",first-won);
    document.querySelector("h1").innerText="First-player-Won";
}


// myfunction2 shold run if player second wins
function myFunction2(){
    // document.querySelector("h1").setAttribute("class",second-won);
    document.querySelector("h1").innerText="Second-player-Won";
}

// Creating images array 
var imageArray=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

// selecting random dice-img for player first and second

var imgIndex1=Math.floor(Math.random()*6);
var imgIndex2=Math.floor(Math.random()*6);

// getting attributes of the images
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');


// function change img1
function changeImage1() {
    img1.setAttribute("src",imageArray[imgIndex1]);
}

// function to change img2
function changeImage2() {
    img2.setAttribute("src",imageArray[imgIndex2]);
}



// crating a function to start play the game

function play(){
//calling the functions

changeImage1();       
changeImage2();
winner();
}

// creating function to change text of h1
function winner()
{
    if (imgIndex1>imgIndex2){
          myFunction1();
    }
    else if(imgIndex1<imgIndex2){
         myFunction2();
        }
    else {
          
    }
}


// adding functionality to the button
const button = document.querySelector('button');
button.addEventListener('click', () => {
  button.textContent = 'Play again';
  button.addEventListener('click', () => {
    location.reload();
  });
});