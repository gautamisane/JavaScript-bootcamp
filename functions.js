function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(4, 5));

let sayHello = () => {
    console.log('hello')
}
sayHello();


function sayHellow() {
    console.log('hello')
}
sayHellow();


calculateCost = (ticketPrice, noOfPerson) => {
    noOfPerson = ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));
// 1000

trip = () => "Trip in Greece";
console.log(trip());


trip = place => "Trip to " + place;
console.log(trip("Paris")); //one parameter

trip = _ => "Trip to " + _;
console.log(trip("London")); //one parameter

//Array destructuring in functions

let myArray = ["rohit", "raj", "jay"];
function showDetails([arg1, arg2]) {
    console.log(arg1);
    console.log(arg2);
}

showDetails(myArray);

//Nested function

function giveMessage(message) {
    let userMsg = message;
    userMsg = toUser("Bob");
    function toUser(userName) {
        let name = userName;
        let greet = userMsg + " " + name;
        return greet;
    }
    return userMsg;
}

console.log(giveMessage("The world says hello dear: "));

function notificationMsg(msg, name) {
    let mainMsg = msg;
    let mainName = name;
    let output = mainMsg + " " + mainName;
    return output;
}

console.log(notificationMsg("The world says hello dear: ", "Gau"));

//PRACTISE More on nested
//Variable declared without var has global scope


let addValues = (a=30,b) => a+b;
console.log(addValues(35));



 
