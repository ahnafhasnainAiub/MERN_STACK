const mongoose = require("mongoose");
const Chat = require("./models/chat.js")


main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//chat schema insert
let allChats = [
 {
    from: "Aynan",
    to: "Hasnain",
    msg: "Congo man!",
    Created_at: new Date(),
  },
  {
    from: "Nahiun",
    to: "Ahnaf",
    msg: "keep it up man!",
    Created_at: new Date(),
  },
  {
    from: "Hasnain",
    to: "Ahnaf",
    msg: "Me too man!",
    Created_at: new Date(),
  },
  {
    from: "Nahiun",
    to: "Elham",
    msg: "Hey gullu!!",
    Created_at: new Date(),
  },

];
 
 Chat.insertMany(allChats);
 
 