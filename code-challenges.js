// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//if less than 35 return string "35 is below boiling point", if temp is above 350 return "350 is above boiling point", if temp is 212 return "212 is at boiling point".

const thermometer = (number) => {

  if(number <= 35){
        return "35 is below boiling point"
    } else if(number >= 350){
        return "350 is above boiling point"
    } else if (number === 212) {
        return "212 is at boiling point"
    } else {
        return "USER ERROR"
    }

}
// console.log(thermometer(temp3));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

//a function that multiplies each number changing it's value by * by 5 using a for loop

var myNumbers1 = [3, 7, 0, 6, -9]


// for(let i=0; i < myNumbers1.length; i++){
//   console.log(myNumbers1[i] * 5)
// }
//works^

//now to print answer as an array

const mult5 = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(array[i] * 5)
  }
    return newArr
}

// console.log(mult5(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

// create a function that loops through the given array and returns each number * 5 using map
//expected outcome must return as array.


var myNumbers2 = [8, -7, 0, 6, 2]

const multiplierMapQuestion = myNumbers2.map(value => value * 5)

// console.log(multiplierMapQuestion)





// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//create a function that takes both strings, and displays as one string that has remove all vowels

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


const noVowels = (string) => {
  let newArray = string.split("")
  let filteredArray = newArray.filter(value => {
      return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !=="u" && value !== "y"
})
  let newString = filteredArray.join("")
      return newString
}
// console.log(noVowels(stringWithVowels1 + "," + " " + stringWithVowels2));




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

//basically a catch all statment to display an error if input !== string

//maybe use elseif


var notAString1 = true
var notAString2 = 42


const notStrings = (string) => {

    if (typeof string !== "string") {
      return `${string} is not a string`
       // return "42 is not a string"
    }  else{
      const noVowels = (string) => {
        let newArray = string.split("")
        let filteredArray = newArray.filter(value => {
            return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !=="u" && value !== "y"
      })
        let newString = filteredArray.join("")
            return newString
      }
    }
   }

console.log(notStrings(notAString1));
console.log(notStrings(notAString2));
console.log(noVowels(stringWithVowels1 + "," + " " + stringWithVowels2));




// const noVowels = (string) => {
//   let newArray = string.split("")
//   let filteredArray = newArray.filter(value => {
//         return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !=="u" && value !== "y"
// })
//   let newString = filteredArray.join("")
//         return newString
// }
//
// const noVowelsStringOnly = (string) => {
//     if (typeof string === "string") {
//         return string.split("").filter(value => {
//             return value !== "a" && value !== "A" && value !== "e" && value !== "E" &&  value !=="i" && value !== "I" &&  value !=="o" && value !=="O" && value !== "u" && value !== "U"
//         }).join("")
//     }
//     else{
//         return `${string} is not a string`
//     }
// }






// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

//Create a function that runs through the object and returns only cats names

//.filter could be used

//.push could be used

//elseif statement(?)...

var cats = []
function onlyCats(array) {
  array.forEach(function(animal){
    if (animal.animal === 'cat') {
      cats.push(animal.name)
    }
  });
  return cats;
}
// console.log(onlyCats(toonimals));


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//use same code from #6 edit it to bring back other animals !== cat...

var cats = []
function onlyCats(array) {
  array.forEach(function(animal){
    if (animal.animal === 'dog') {
      cats.push(animal.name)
    } else if (animal.animal === 'duck') {
      cats.push(animal.name)
    }else if (animal.animal === 'mouse') {
      cats.push(animal.name)
    }
  });
  return cats;
}
// console.log(onlyCats(toonimals));
