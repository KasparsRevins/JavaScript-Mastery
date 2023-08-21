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