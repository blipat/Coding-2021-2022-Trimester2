//Exercise #2
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
while(randomString.length <= 10) {
    randomString += alphabet[Math.floor(Math.random()*alphabet.length)];
}
console.log(randomString);

//Exercise #3
var input = "javascript is awesome";
var output = "";
for(var index = 0; index<input.length; index++){
    if(input[index]==="a"){
        output += "4";
    }
    else if(input[index]==="e"){
        output += "3";
    }
    else if(input[index]==="o"){
        output += "0";
    }
    else if(input[index]==="i"){
        output += "1";
    }
    else {
        output += input[index];
    }
}
console.log(output);