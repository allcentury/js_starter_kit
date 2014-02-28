var nameArray = [
  "Wat is jou naam?",
  "Wat is U naam?",
  "Si ju quajnë?",
  "Wie heisch dü?",
  "Cómo te clamas?",
  "Անունդ ի՞նչ է:?",
  "Sənin adın nədir?",
  "Zer da zure izena?",
  "Kako se zoveš?",
  "Unsa imong ngalan?",
  "What is your name?"
];


var max = 1000;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomArrayValue(array){
  var item = Math.floor(Math.random()*array.length);
  return array[item];
}

function IsNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}


var winningNum = randomNumber(0, max);

var userName = prompt(randomArrayValue(nameArray));

var guess = prompt('Guess a number between 0 and ' + max);

while (guess != winningNum)
  {
    if (IsNumeric(guess) === false || guess > max || guess < 0) {
      guess = prompt("Sorry " + userName + " that was some invalid input, you must enter a number between 0 and " + max);
    }
    else if (guess < winningNum) {
      guess = prompt('Too low ' + userName + ', try again...');
    }
    else {
      guess = prompt('Too high ' + userName + ', try again...');
    }
  }

alert("CONGRATS " + userName.toUpperCase() + " YOU BEAT THE INTERNET");
