// This is for switch case statement
// In this program we will check the grade

let text2 = document.write("Please input letter Grade");

let text = window.prompt("What's your Grade?");
text = String(text);

switch(text){
    case 'A':
        console.log("You did great!");
        break;
    case 'B':
        console.log("You did good!");
        break;
    case 'C':
        console.log("You did okay!");
        break;
    case 'D':
        console.log("you passed.... barely");
        break;
    case 'F':
        console.log("You Failed");
        break;
    default:
        console.log(text, "is not a letter grade!");
}