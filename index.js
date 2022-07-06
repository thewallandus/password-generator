const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordONE = document.getElementById('1Password');
let passwordTWO = document.getElementById('2Password');


// Each password should be 15 characters long
// first we need an empty array
// Then we need to create a random number
// Then just randomly select an index for a character
// Push it to the empty array
// Then do it again 15 times

function getRandomCharacter() {
    let randomNum = Math.floor( Math.random() * characters.length );
    return characters[randomNum]
}

function passwordOne() { 
    let passOne = "";
    for (let i = 0; i <= 15; i++) {
        passOne += getRandomCharacter(); 
    }
    return passOne;
}

function passwordTwo() {
    let passTwo = "";
    for (let i = 0; i <= 15; i++) {
        passTwo += getRandomCharacter();
    }
    return passTwo;
}


function generatePassword() {
    passwordONE.textContent = passwordOne();
    passwordTWO.textContent = passwordTwo();
}
