//  let promise = new Promise (function(resolve, reject) {
//      setTimeout(() => resolve("Resolved!"), 1000);
//  })

//  promise.then(
//      result => alert(result)
//  );

// new Promise(function(resolve, reject){
//     setTimeout(() => resolve(2), 1000);
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//      try {
//          throw new Error;
//      } catch (error) {
//          error => alert(error)
//      }
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// })

// const promise = Promise.all([1, 2 , 3, Promise.resolve(4) ]);

// console.log(promise)

// async function f() {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Resolved!"), 1000);
//   });
//   let result = await promise;

//   alert(result);
// }

// f();

// async function f(promise, timeoutDuration) {
//     let promise = new Promise(function(resolve, reject){

//     })

// }

// Task 1
// let promise = new Promise (function(resolve, reject) {
//     setTimeout(() => resolve("Resolved!"), 1000);
// })

// promise.then(
//     result => alert(result)
// );

// Task 2
// let promise = new Promise (function(resolve, reject) {
//     setTimeout(() => reject("Error!"), 1000);
// })

// promise.catch(
//     result => alert(result)
// );

// Task 3

// let promise = new Promise (function(resolve, reject) {
//     setTimeout(() => resolve(resolve(3)), 1000);
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// })

// Task 4

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))
// ]).then(alert);

// Task 5

// Promise.race([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))
// ]).then(alert);

// Task 6

// let promise = new Promise(function(resolve, reject){

//     function myDisplayer(some) {
//         document.getElementById("demo").innerHTML = some;
//       }

//       function myCalculator(num1, num2) {
//         let sum = num1 + num2;
//         myDisplayer(sum);
//       }

//       value = myCalculator(5, 5);

//       try {
//         return Promise.resolve(value);
//     } catch (error) {
//         return Promise.reject(error);
//     }
//     })

// Task 7

// async function funct() {
//   let promise = new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => resolve("Done!"), 1000);
//     } catch (error) {
//       alert(error);
//     }
//   });
//   let result = await promise;

//   alert(result);
// }

// funct();

// Task 8

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000)),
// ])
// .then((response )=> console.log(response.json()))
// .catch((error)=>{console.log(error)});
