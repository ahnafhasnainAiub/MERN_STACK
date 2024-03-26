const mongoose = require('mongoose');


//Connection stablish
main()
.then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Creating Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

//Creating Document's

const User = mongoose.model("User", userSchema);
//const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//     name: "Ahnaf Hasnain",
//     email : "ahnafhasnain7860@gmail.com",
//     age : 24,
// });

// user1
//   .save()
//   .then((res) => {
//      console.log(res);
//   })
//   .catch((err)=> {
//     console.log(err);
//   });

// const user2 = new User({
//     name: "Ahmed Julkarnain",
//     email : "ahmedjulkarnain5152@gmail.com",
//     age : 13,
// });

// user2
//   .save()
//   .then((res) => {
//      console.log(res);
//   })
//   .catch((err)=> {
//     console.log(err);
//   });

//update value

// User.findOneAndUpdate( {name:"Ahnaf Hasnain"}, { age:23 }, { new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndUpdate( {_id:'65f4a69dcd6b697b0582bcf1'}, { age : 13 }, { new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });