// let n = 5;
// for(let i=0; i<n;i++){
//     console.log("Hello World", i);
// }
// console.log("Welcome to the era of Backend Ahnaf!");

// let args = process.argv;
// for(let i=1; i<args.length; i++){
//     console.log("Hello to ", args[i]);
// }

// const info = require("./Students");

// console.log(info[1].Cgpa);

var figlet = require("figlet");

figlet("Ahnaf  Hasnain  Nahiun", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});