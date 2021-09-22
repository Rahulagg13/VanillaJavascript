//***** JAVASCRIPT PROMISE

/*
Promises in real-life express a trust between two or more persons and an assurance that a particular thing will surely happen.
In javascript, a Promise is an object which ensures to produce a single value in the future (when required).
Promise in javascript is used for managing and tackling asynchronous operations.
*/
/*
Promise can be present in any 3 states:
1.pending
2.fulfilled
3.reject
4.resolve
*/
// syntax:
/*
let promise=new Promise((resolve,reject)=>{
    if(error){
        reject();
    }else{
        resolve();
    }
})

promise.then(()=>{}).catch(error=>{})
*/
// example

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    error = false;
    if (!error) {
      resolve(1);
    } else {
      console.log("Rejected");
      reject(0);
    }
  }, 2000);
});

// promise
//   .then(() => {
//     console.log("Function is executed successfully");
//   })
//   .catch((error) => {
//     console.log("Bad request " + error);
//   });
//Promise Chaining
/*
when we use multiple then block with the promise, this is called Promise chaining
*/
promise
  .then((data) => {
    console.log(data);
    return 1 * 2;
  })
  .then((data) => {
    console.log(data);
    return data * 2;
  })
  .then((data) => {
    console.log(data);
    return data * 2;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
