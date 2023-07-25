/*
Task: JavaScript Function Manipulation and Usage

In this task, you will work with JavaScript functions and perform various operations and manipulations.
 Follow the instructions provided for each function.

Step 1: Greeting Function
Create a function called "greet" that takes a name as an argument and returns a greeting message.
 The greeting message should be in the format "Hello, [name]!".
*/
function greet(name) {
    return "Hello " + name + "!";
}
/*
Step 2: Sum Function
Create a function called "sum" that takes two numbers as arguments and returns their sum.
*/
function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
/*
Step 3: Calculator Function
Create a function called "calculator" that takes two numbers and an operator (+, -, *, /) 
as arguments and returns the result of the corresponding operation. For example, 
if the operator is "+", the function should return the sum of the two numbers. Support addition,
subtraction, multiplication, and division operations.
*/
function calculator(num1, num2, operator) {
    if (operator == "+") {sum = num1 + num2;
    } else if (operator == "-") {sum = num1 - num2;
    } else if (operator == "*") {sum = num1 * num2;
    } else if (operator == "/") {sum = num1 / num2;
    }
    return sum;
}
/*
Step 4: Reverse String Function
Create a function called "reverseString" that takes a string as an argument and returns the 
reverse of the input string. For example, if the input is "hello", the function should return "olleh".
*/
function reverseString(input){
    reversedString = "";
    for (i in input){ 
    reversedString += input[input.length-i-1];  
    }
    return reversedString;
}
/*
Step 5: Palindrome Check Function
Create a function called "isPalindrome" that takes a string as an argument and checks whether 
it is a palindrome or not. A palindrome is a word, phrase, number, or other 
sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization)
.The function should return true if the string is a palindrome and false otherwise.
*/

function isPalindrome(name){
    reversedString= "";
    for (i in name){
        reversedString += name[name.length - i - 1];
    }
    if (name == reversedString) { return true; }
    else { return false; }
}

/* 
Tests:    
    isPalindrome("racecar");
    True

    isPalindrome("tree");
    False
*/