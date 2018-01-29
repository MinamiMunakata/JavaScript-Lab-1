/*
	JavaScript Lab1
	
	Derrick Park
*/


// Question 1
function makeAbba(a, b) {
	return a + b + b + a;
}

var answer1 = makeAbba("Hi", "Bye");
var answer2 = makeAbba("Yo", "Alice");
var answer3 = makeAbba("What", "Up");

document.write("<h1>Question 1</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")
