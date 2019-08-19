//person class with variables
var Person = /** @class */ (function () {
    function Person(firstname, lastname, age) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
    }
    //return full name
    Person.prototype.fullInfo = function () {
        return this.firstName + " " + this.lastName + " " + "makes " + weeklyWage(getRandom(), 40);
    };
    return Person;
}());
//arrays for peerson properties
var nameArray = ["Mike", "Paul", "Nick", "Adam"];
var lastArray = ["Adams", "Sticks", "Oldman"];
var ageArray = ["12", "32", "44", "61"];
//function to get random int for array index
function getRandomInt() {
    return Math.floor(Math.random() * 3) + 0;
}
//function to get random int for hours worked
function getRandom() {
    return Math.floor(Math.random() * 40) + 0;
}
//function that calculates the weeklywage
function weeklyWage(hourlyWage, hours) {
    if (hours === void 0) { hours = 40; }
    return hourlyWage * hours;
}
//person builder
function makePerson() {
    var x = getRandomInt();
    var y = getRandomInt();
    var z = getRandomInt();
    var person = new Person(nameArray[x], lastArray[y], ageArray[z]);
    // create a new div element 
    var newDiv = document.createElement("div");
    var newCard = document.createElement("div");
    newDiv.setAttribute("class", " card text-center d-inline-block m-3 p-3 shadow");
    var newContent = document.createTextNode(person.fullInfo());
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    currentDiv.appendChild(newDiv);
}
