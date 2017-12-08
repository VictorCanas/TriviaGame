//ORGINIAL IDEA//The logic of the game is to have an array of choices and have the image match that word then the 4 choices //are displayed in the bottom that come from the another array of choices //if the button that was selected matches the image(word array) then the answer is correct//other choice will have displayed wrong and go to the next one
//Function hides all the information from a page $(document).ready(function() {    $('#statext').hide();    $('#image').hide();    $('#distext').hide();    $('#button').hide();});
//When the start button is clicked it starts the game $("#startClock").click(function(){    startTimer();    $('#startClock').hide();    $('#statext').show();    $('#image').show();    $('#distext').show();    $('#button').show(); });
// This array holds the words we are going to choose from.//need to add 1 morevar words = ['eleven', 'demogorgon', 'barbara', 'will', 'lucas'];var choices = [['eleven', 'dustin', 'joyce', 'nancy'] , ['lucas', 'dustin', 'joyce', 'nancy'] , ['eleven', 'dustin', 'joyce', 'nancy'] , ['eleven', 'dustin', 'joyce', 'nancy'] , ['eleven', 'dustin', 'joyce', 'nancy'] , ['eleven', 'dustin', 'joyce', 'nancy']]
//The problem with having this is that some random choices are going to be duplicates and sometimes even the random choice in the button //won't be there to select - there will have to be a lot of if and else statements //var choices = ['eleven', 'dustin', 'mike', 'lucas', 'joyce', 'will', 'nancy', 'billy', 'max', 'demogorgon','barbara'];
//chooses a random word var rand = parseInt(Math.random() * words.length);var word = words[rand];
//choose four random choices //var randchoice1 = parseInt(Math.random() * choices.length);//var randchoice2 = parseInt(Math.random() * choices.length);//var randchoice3 = parseInt(Math.random() * choices.length);//var randchoice4 = parseInt(Math.random() * choices.length);
//assigns that random word to word  
//assigns four random choices  //var choice1 = choices[randchoice1];//var choice2 = choices[randchoice2];//var choice3 = choices[randchoice3];//var choice4 = choices[randchoice4];
//test if random word and choices work//console.log(word);//console.log(choice1);//console.log(choice2);//console.log(choice3);//console.log(choice4);
//Array to concatenate the word with - var displayWord = "-".repeat(word.length);
document.getElementById("distext").innerHTML = word;
//This gets the image but it also gets the image of what it's being guessed//This is done creatively by using the variable word and having the image file match the array of word document.getElementById('image').src = "assets/images/" + word + ".png";
function startTimer(){  var counter = 20;  setInterval(function() {    counter--;    if (counter >= 0) {      span = document.getElementById("count");      span.innerHTML = counter;    }    if (counter === 0) {        alert('sorry, out of time');        clearInterval(counter);    }  }, 1000); 
}
function displayStatus(status){  document.getElementById("statext").innerHTML = status;}

