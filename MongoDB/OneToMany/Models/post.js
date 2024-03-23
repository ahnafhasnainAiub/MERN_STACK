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
        addresses: String,
      });

      const postSchema = new Schema({
          content: String,
          likes: Number,
          user : {
            type: Schema.Types.ObjectId,
            ref: "User"
          }
      });


      const User =  mongoose.model("User",userSchema);
      const Post = mongoose.model("Post", postSchema);
      
      const getData = async () => {
        //  let result = await Post.findOne({}).populate("user");
        let result = await Post.findOne({}).populate("user", "username");
         console.log(result);
      };

      getData();

    //   const addData = async () => {
    //     let user1 = new User({
    //         username: "Ahnaf Hasnain",
    //         email: "ahnafnahiun@gmail.com",
    //     });
    
    // const addData = async () => {
    //     let user = await User.findOne({ username: "Ahnaf Hasnain"});

    //     let post2 = new Post({
    //         content: "I'm feeling goooood!!",
    //         likes: 68,
    //     });

    //     post2.user = user;

    //     await post2.save();

    //   };

    //   addData();


    //   const del = async () => {
    //       await User.findByIdAndDelete('65feadb585dba65c594e0464');
    //   };

    //   del();