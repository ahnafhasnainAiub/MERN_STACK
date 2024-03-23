
// One-to-many Part-1 (one to few )

const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(()=> console.log("Connection successful"))
    .catch((err) => console.log(err));

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
      }

      const userSchema = new Schema({
        username : String,
        addresses: [
            {
                _id : false,
                location: String,
                city: String,
            },
          ],
      });


      const User =  mongoose.model("User",userSchema);
      
      const addUsers =  async () => {
        
        let user1 = new User({
             username: "Ahnaf hasnain",
             addresses: [
                {
                    location: "Dhanmondi 13/A",
                    city: "Dhaka",
                },
                {
                    location: "Bashundhora R/A",
                    city: "Dhaka",
                },
             ],
         });
          
           user1.addresses.push({ location:"Chandgaw", city:"Chittagong"});

           let result = await user1.save();
           console.log(result);
        };
    
        addUsers();