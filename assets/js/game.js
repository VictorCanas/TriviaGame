$(document).ready(function() {
    $('#statext').hide();
    $('#image').hide();
    $('#distext').hide();
    $('#button').hide();
});


// This array holds the words we are going to choose from.
var words = ['eleven', 'demogorgon', 'barbara', 'will', 'lucas'];

// This array holds number, max, and letters gueesed.
var guesses = { number: 0, max: 6, letters: {} };

//chooses a random word 
var rand = parseInt(Math.random() * words.length);

//assigns that random word to word  
var word = words[rand].toUpperCase();

//Array to concatenate the word with - 
var displayWord = "-".repeat(word.length);

document.getElementById("distext").innerHTML = word;

//This gets the image but it also gets the image of what it's being guessed
//This is done creatively by using the variable word and having the image file match the array of word 
document.getElementById('image').src = "assets/images/" + word + ".png";

function startTimer(){
  var counter = 10;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000); 

}
$("#startClock").click(function(){
    startTimer();
    $('#startClock').hide();
    $('#statext').show();
    $('#image').show();
    $('#distext').show();
    $('#button').show();
 });


function displayStatus(status)
{
  document.getElementById("statext").innerHTML = status;
}


String.prototype.replaceAt = function(index, replacement)
{
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
