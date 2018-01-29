/*
JavaScript Laab1

Minami Munakata
*/

//Question 1
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

//Question 2
function endsLy(str) {
	if (str.endsWith("ly")) {
		return true;
	}
	else {
		return false;
	}
}

var answer4 = endsLy("oddly");
var answer5 = endsLy("y");
var answer6 = endsLy("oddy");

document.write("<h1>Question 2</h1>")
document.write("<h2>Test Case 1 : " + answer4 + "</h2>")
document.write("<h2>Test Case 2 : " + answer5 + "</h2>")
document.write("<h2>Test Case 3 : " + answer6 + "</h2>")

//Question 3
function firstHalf(str) {
	return str.substring(0,str.length/2);
}

var answer7 = firstHalf("WooHoo");
var answer8 = firstHalf("HelloThere");
var answer9 = firstHalf("abcdef");

document.write("<h1>Question 3</h1>")
document.write("<h2>Test Case 1 : " + answer7 + "</h2>")
document.write("<h2>Test Case 2 : " + answer8 + "</h2>")
document.write("<h2>Test Case 3 : " + answer9 + "</h2>")

//Question 4
function right2(str) {
	if (str.length == 2 ) {
		return str;
	} else {
		return str.substring(str.length-2,) + str.substring(0, str.length-2);
	}
}
var answer10 = right2("Hello");
var answer11 = right2("java");
var answer12 = right2("Hi");

document.write("<h1>Question 4</h1>")
document.write("<h2>Test Case 1 : " + answer10 + "</h2>")
document.write("<h2>Test Case 2 : " + answer11 + "</h2>")
document.write("<h2>Test Case 3 : " + answer12 + "</h2>")

//Question 5
function conCat(a, b) {
	if (a[a.length-1] == b[0]) {
		return a + b.substring(1,);
	} else {
		return a + b;
	}
}

var answer13 = conCat("abc", "cat");
var answer14 = conCat("dog", "cat");
var answer15 = conCat("abc", "");

document.write("<h1>Question 5</h1>")
document.write("<h2>Test Case 1 : " + answer13 + "</h2>")
document.write("<h2>Test Case 2 : " + answer14 + "</h2>")
document.write("<h2>Test Case 3 : " + answer15 + "</h2>")

//Question 6
function frontAgain(str) {
	if (str.substring(0,1) == str.substring(str.length-2,str.length-1)) {
		return true;
	} else {
		return false;
	}
}

var answer16 = frontAgain("edited");
var answer17 = frontAgain("edit");
var answer18 = frontAgain("ed");

document.write("<h1>Question 6</h1>")
document.write("<h2>Test Case 1 : " + answer16 + "</h2>")
document.write("<h2>Test Case 2 : " + answer17 + "</h2>")
document.write("<h2>Test Case 3 : " + answer18 + "</h2>")

//Question 7
function deFront(str) {
	if (str[0] == "a") {
		return str[0] + str.substring(2,);
	} else if (str[1] == "b") {
		return str.substring(1,);
	} else {
		return str.substring(2,);
	}

}
var answer19 = deFront("Hello");
var answer20 = deFront("java");
var answer21 = deFront("away");

document.write("<h1>Question 7</h1>")
document.write("<h2>Test Case 1 : " + answer19 + "</h2>")
document.write("<h2>Test Case 2 : " + answer20 + "</h2>")
document.write("<h2>Test Case 3 : " + answer21 + "</h2>")

//Question 8
function withoutX2(str) {
	if (str[0] == "x" && str[1] == "x") {
		return str.substring(2,);
	} else if (str[0] == "x") {
		return str.substring(1,);

	} else if (str[1] == "x") {
		return str[0] + str.substring(2,);
	} else {
		return str;
	}
}

var answer22 = withoutX2("xHi");
var answer23 = withoutX2("Hxi");
var answer24 = withoutX2("Hi");

document.write("<h1>Question8</h1>")
document.write("<h2>Test Case 1 : " + answer22 + "</h2>")
document.write("<h2>Test Case 2 : " + answer23 + "</h2>")
document.write("<h2>Test Case 3 : " + answer24 + "</h2>")

//Question 9
function lastChars(a, b) {
	if (a.length == 0) {
		a = "@"
		return a + b[b.length-1];
	} else if (b.length == 0) {
		b = "@"
		return a[0] + b;
	} else {
		return a[0] + b[b.length-1]
	}
}

var answer25 = lastChars("last","chats");
var answer26 = lastChars("yo","java");
var answer27 = lastChars("hi","");

document.write("<h1>Question9</h1>")
document.write("<h2>Test Case 1 : " + answer25 + "</h2>")
document.write("<h2>Test Case 2 : " + answer26 + "</h2>")
document.write("<h2>Test Case 3 : " + answer27 + "</h2>")

//Question 10
function middleTwo(str) {
	return str.substring(str.length/2 -1, str.length/2 +1)
}

var answer28 = middleTwo("string");
var answer29 = middleTwo("code");
var answer30 = middleTwo("Practice");

document.write("<h1>Question10</h1>")
document.write("<h2>Test Case 1 : " + answer28 + "</h2>")
document.write("<h2>Test Case 2 : " + answer29 + "</h2>")
document.write("<h2>Test Case 3 : " + answer30 + "</h2>")