var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonHTML = this.innerHTML;
  makeSound(buttonHTML);
  buttonAnimation(buttonHTML);
}

document.addEventListener("keypress",function(event){
  var keyPressed=event.key;
makeSound(keyPressed);
buttonAnimation(keyPressed);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom1 = new Audio('sounds/tom-2.mp3');
      tom1.play();
      break;

    case "s":
      var tom1 = new Audio('sounds/tom-3.mp3');
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-4.mp3');
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio('sounds/kick-bass.mp3');
      tom1.play();
      break;

    case "k":
      var tom1 = new Audio('sounds/snare.mp3');
      tom1.play();
      break;

    case "l":
      var tom1 = new Audio('sounds/crash.mp3');
      tom1.play();
      break;

    default:
      console.log(this);
    }
}

function buttonAnimation(key){
var activeButton=document.querySelector("."+key);

activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100)
}
