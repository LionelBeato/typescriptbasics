//person class with variables
var Person = /** @class */ (function () {
    function Person(firstname, lastname, mood) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.mood = mood;
    }
    //return full name
    Person.prototype.fullInfo = function () {
        return this.firstName + " " + this.lastName + " " + "is " + this.mood;
    };
    return Person;
}());
//arrays for peerson properties
var nameArray = ["Mike", "Paul", "Nick", "Adam", "Josh", "Michael", "Jeremiah", "Joseph"];
var lastArray = ["Adams", "Sticks", "Oldman", "Fellows", "Proud", "Stewart", "Bizby"];
var moodArray = ["sad", "happy", "apoplectic", "sullen", "overjoyed", "despondent", "headstrong"];
//function to get random int for array index
function getRandomInt() {
    return Math.floor(Math.random() * 8) + 0;
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
    var button = document.getElementById("Button");
    var load = document.createElement("span");
    load.setAttribute("class", "spinner-grow position-top");
    load.setAttribute("id", "spin");
    button.appendChild(load);
    button.disabled = true;
    setTimeout(function () { button.disabled = false; }, 3000);
    setTimeout(function () {
        document.getElementById("spin").remove();
    }, 3000);
    var x = getRandomInt();
    var y = getRandomInt();
    var z = getRandomInt();
    var person = new Person(nameArray[x], lastArray[y], moodArray[z]);
    // create a new div element 
    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    var newBody = document.createElement("div");
    newDiv.setAttribute("class", "card border border-white text-center text-light d-inline-block shadow animated rubberBand");
    newBody.setAttribute("class", "card-body bg-info rounded-bottom");
    newImg.setAttribute("src", "https://source.unsplash.com/random/?headshot,man?sig=" + Math.random() * 10);
    newImg.setAttribute("class", "card-img-top img-fluid");
    // newImg.setAttribute("style","width: 18rem")
    var newContent = document.createTextNode(person.fullInfo());
    newDiv.appendChild(newImg);
    // add the text node to the newly created div
    newBody.appendChild(newContent);
    newDiv.appendChild(newBody);
    // add the newly created element and its content into the DOM 
    var parentDiv = document.getElementById("div1");
    parentDiv.prepend(newDiv);
}
