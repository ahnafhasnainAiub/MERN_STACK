const express =  require("express");
const app = express();

let port = 8080;

app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`);
});

// app.use((req, res) =>{
//     console.log("Request reciever");
//     let code ="<h1>Fruits List</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
// });


// app.get("/contact", (req,res)=> {
//     res.send("You Connected with Contact path");
// });

// app.get("/help", (req,res)=> {
//     res.send("You Connected with Help path");
// });

// app.get("*", (req,res)=> {
//     res.send("You Connected with Wrong path");
// });

// app.post("/", (req,res)=> {
//     res.send("You sent a post request");
// });

app.get("/", (req,res)=> {
    res.send("You Connected with root path");
});


app.get("/:username/:id", (req,res)=> {
    let { username, id} = req.params;
    htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});
//Query String
app.get("/what", (req,res)=> {
    let { q } = req.query;
    if(!q){
      res.send("<h1>Wrong search</h1>");
    }
    htmlQry = `<h1>Welcome to the page of @${q}</h1>`;
    res.send(htmlQry);
});
