/*

Task 1: Sum of Array Elements
Write a function called `sumArray` that takes an array of numbers as input and returns the sum of all elements in the array.

*/
function sumArray(arr) {
    // Your code here
      sum = 0;
      for (var i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));

/*

Task 2: Find Maximum Number
Write a function called `findMaxNumber` that takes an array of numbers as input and returns the maximum number in the array.

*/

  function findMaxNumber(arr) {
    // Your code here
      max = 0;
      for (var i = 0; i < arr.length; i++) {
          if (max <= arr[i]){
              max = arr[i];
          }
      }
      return max;
  }

  

  console.log(findMaxNumber([1, 4, 100, 1, 3 , 5 ,6, 2]));

  /*

Task 3: Reverse a String
Write a function called `reverseString` that takes a string as input and returns the reversed version of the string.

  */

function reverseString(input){
    reversedString = "";
    for (i in input){ 
    reversedString += input[input.length-i-1];  
    }
    return reversedString;
}

console.log(reverseString("Hello!"));
 /*
 
Task 4: Check Prime Number
Write a function called `isPrime` that takes a number as input and returns `true` if it is a prime number, otherwise `false`.

  */

function isPrime(num) {
    // Your code here
    var isPrime = true;
    if (num === 1) {
        return false;
    }  
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
          if (num % i === 0 ) {
            isPrime = false;
            break;
        }
      }
      if (isPrime) {
          return true;
      } else { return false; }
    }
  }
 
console.log(isPrime(19));

/*

Task 5: Calculate Fibonacci Sequence
Write a function called `fibonacci` that takes a number `n` as input and returns the first `n` numbers in the Fibonacci sequence as an array.

*/

function fibonacci(n) {
  fibonacciArray = [0];
  var a = 0, b = 1, c;
  if ( n == 0)
    return a;

  for (var i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacciArray += " : " + b;
    }
  return fibonacciArray;
}

console.log(fibonacci(20));