

var wins= 1 ;
var loses= 0;
var guesses = 0; 
var userGuess= 0; 

var computerChoices = ["abcdefghijklmnopqrstuvwxyz"];
var cc = computerChoices[0].split("");

var randomLetter = cc[Math.floor(Math.random()* cc.length)];


$(document).keyup(function(event){
  var userGuesses= event.key;

 //console.log(event.key);

 if (userGuesses=== randomLetter){

 $("#myDiv").html("Congratulations Your a Mind Reader");

///  increase wins 
    ++wins;

   $("#mywins").html(wins);
    //console.log(wins);


 } else if ( userGuesses != randomLetter){


$("#myDiv").html("Look deeper into my Mind. Keep Trying ");


 }




});


//console.log(randomLetter);




//console.log(computerChoices[0].split(""));




///Create an array of letters of computer guesses




/// Make it random 

//var newWords = words[Math.floor(Math.random() * words.lenght)];
//var chosWords= words[newWords];

//console.log(chosWords);



//$(document).click("button", function(){
    //console.log("Button Click");

  //  var wordArray = ["words", "I I I I I", "play", "hangman", "with"];
    // console.log(wordArray[0])
    // console.log(wordArray[0].split(""));
    
   // console.log(Math.random()* wordArray.length); 

    //var newWordVariable = wordArray[Math.floor(Math.random()* wordArray.length)];

   // var splitUpWord = newWordVariable.split("");
   // console.log(splitUpWord);
   //// var underscoreArray = [];
    //for (var i = 0; i < splitUpWord.length; i++){
   //     underscoreArray.push("_");
       // console.log(underscoreArray)

///}







///event listener for input 

//$( "html" ).keyup (function(event){

	


//});



///document.addEventLister('keypress',(event) ==>{
// var keycode = event.keycode;
 //var keyword = String.fromCharCode(keycode);


///match the input to array 


//if(chosWord.indexOf(keyword) > -1)

 //console.log(keycode);

//});









///match the input to array 



///Capture the number of  false guess

///Capture the number of  wins 

///Set a number of guesses

///Display number of guesses 

///Increase the player wins 