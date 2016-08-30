// Initialize your app
var myApp = new Framework7({
    fastClicks: true,
    tapHold: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Declare Morse code variables
var symbol;
var letter ="";
var dot = ".";
var slash = "-";
var space = " ";
var message = "";
var myTimer;


// Hold feature
$$('div.content-block-inner').on('taphold', function () {
    symbol = slash;
    $(document).ready(function() {
        clearInterval(myTimer);
        $("div.content-block-inner").text(symbol);
        setTimeout(function(){ symbol = space; $("div.content-block-inner").text(symbol); }, 1000);
        letter += symbol;
        startTimer();
    }); 
  
});


// Single tap feature
$$('div.content-block-inner').on('click', function () {
    symbol = dot;
    $(document).ready(function() {
        clearInterval(myTimer);
        $("div.content-block-inner").text(symbol);
        setTimeout(function(){ symbol = space; $("div.content-block-inner").text(symbol); }, 1000);
        console.log(letter += symbol);
        startTimer();
    });
});


function startTimer() {

    // Execute matchLetter function and clear previous letter and symbol values
    myTimer = setInterval(function(){ matchLetter(letter); console.log(letter); letter = ""; symbol = ""; }, 3000);
    console.log(myTimer);
}


// matchLetter function matches the taps(dot and slash) with equivalent letter or number        
function matchLetter(letter) {

    switch (letter) {
    case ".-" : 
        symbol = "A";
        break;

    case "-..." :
        symbol = "B";
        break;
    case "-.-.": 
        symbol = "C"
        break;
    case 
        "-..": 
        symbol = "D";
        break;
    case 
        ".": 
        symbol = "E";
        break;
    case 
        "..-.": 
        symbol = "F";
        break;
    case
        "--.": 
        symbol = "G";
        break;
    case
        "....": 
        symbol = "H";
        break;
    case 
        "..": 
        symbol = "I";
        break;
    case
        ".---": 
        symbol = "J";
        break;
    case
        "-.-": 
        symbol = "K";
        break;
    case
        ".-..": 
        symbol = "L";
        break;
    case
        "--": 
        symbol = "M";
        break;
    case
        "-.": 
        symbol = "N";
        break;
    case
        "---": 
        symbol = "O";
        break;
    case
        ".--.": 
        symbol = "P";
        break;
    case
        "--.-": 
        symbol = "Q";
        break;
    case
        ".-.": 
        symbol = "R";
        break;
    case
        "...": 
        symbol = "S";
        break;
    case
        "-": 
        symbol = "T";
        break;
    case
        "..-": 
        symbol = "U";
        break;
    case
        "...-": 
        symbol = "V";
        break;
    case
        ".--": 
        symbol = "W";
        break;
    case
        "-..-": 
        symbol = "X";
        break;
    case
        "-.--": 
        symbol = "Y";
        break;
    case    
        "--..": 
        symbol = "Z";
        break;
    case
        "-----": 
        symbol = "0";
        break;
    case
        ".----": 
        symbol = "1";
        break;
    case
        "..---": 
        symbol = "2";
        break;
    case
        "...--": 
        symbol = "3";
        break;
    case
        "....-": 
        symbol = "4";
        break;
    case
        ".....": 
        symbol = "5";
        break;
    case
        "-....": 
        symbol = "6";
        break;    
    case
        "--...": 
        symbol = "7";
        break;
    case
        "---..": 
        symbol = "8";
        break;
    case

        "----.": 
        symbol = "9";
        break;
    }
    
    $(document).ready(function() {
        $("div.output").append(symbol);
        letter === ""; 
        symbol === "";
        console.log(letter);
        console.log(symbol);
    }); 
}

