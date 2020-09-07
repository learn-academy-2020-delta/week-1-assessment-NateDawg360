// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

// describe("addThemUp", () => {
// //   //set the test
//   test("returns takes two numbers as arguments and returns the sum", () => {
//   //     //write expectation
//     expect(addThemUp("num1 + num2")).toEqual(7);
//   })
// })




// --------------------1b) See the test fail. THEN write the code to make the test pass.

// var addThemUp = (num1, num2) => {
//   var num1 = 5;
//   var num2 = 2;
//   var total = num1 + num2;
//     // return resutl of num1 plus num2
//     return num1 + num2;
// }
// console.log(addThemUp("num1, num2"));



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

// describe("triangleArea", () => {
// //   //set the test
//   test("a function called triangleArea that takes the base and the height of a triange and returns the area, the divides answer by 2", () => {
//   //     //write expectation
//     expect(triangleArea("4 * 10 / 2")).toEqual(20);
//   })
// })




// --------------------2b) See the test fail. THEN write the code to make the test pass.

var triangleArea = (baseValue, heightValue) => {
  var baseValue = 4;
  var heightValue = 10;

// calculate the area
  var totalArea = (baseValue * heightValue) / 2;
}
console.log(triangleArea(totalArea));




// const multiply =(num1, num2) => {
//   return num1 * num2
// }
// console.log(multiply(4,10));





// var triangleArea = (num1, num2) => {
//   var num1 = 5;
//   var num2 = 2;
//   var total = num1 * num2;
//   var totalAnswerDivided = total % 2
//     // return resutl of num1 times num2
//     return total % 2;
// }
// console.log(triangleArea("num1, num2"));

// var triangleArea = (triangleBase, triangleHeight) => {
//   var triangleBase = 10;
//   var triangleHeight = 4;
//   var areaOfTriangle = "triangleBase * triangleHeight" / 2;
// }
// console.log(triangleArea("triangleBase, triangleHeight"));

// var addThemUp = (num1, num2) => {

// var triangleArea = ("base", "height") => {
//   var base = 5;
//   var height = 10;
//   var triangleAnswer = base * height;
//   // if (base * height) {
//     return triangleAnswer;
//   // }
// }
// console.log(triangleArea("base", "height"));
