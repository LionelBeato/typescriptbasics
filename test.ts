
   //person class with variables

   class Person {

    firstName:string;
    lastName:string;
    age:string;

    constructor(firstname:string, lastname:string, age:string){

        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;

    }

    //return full name
    fullInfo(){
        return this.firstName+" "+this.lastName+" "+"makes "+weeklyWage(getRandom(), 40);
    }


    }


    //arrays for peerson properties
    var nameArray = ["Mike", "Paul", "Nick", "Adam"]
    var lastArray = ["Adams", "Sticks", "Oldman"];
    var ageArray = ["12", "32", "44", "61"];

    //function to get random int for array index
    function getRandomInt() {
    return Math.floor(Math.random() * 3) + 0  

      }

    //function to get random int for hours worked
      function getRandom() {
        return Math.floor(Math.random() * 40) + 0  
    
          }
    
    //function that calculates the weeklywage
    function weeklyWage(hourlyWage:number, hours = 40){
        return hourlyWage * hours;
    }
      
       
    //person builder
    function makePerson(){
       let x = getRandomInt();
       let y = getRandomInt()
       let z = getRandomInt();

       let person = new Person(nameArray[x], lastArray[y], ageArray[z]);

                    // create a new div element 
            var newDiv = document.createElement("div"); 

            var newBody = document.createElement("div")
            var newContent = document.createTextNode(person.fullInfo())

            // add the text node to the newly created div
            newDiv.appendChild(newContent);  

            // add the newly created element and its content into the DOM 
            var currentDiv = document.getElementById("div1"); 
            document.body.insertBefore(newDiv, currentDiv);   


    }



