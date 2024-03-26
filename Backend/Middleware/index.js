const express =require("express");
const app = express();
const ExpressError = require("./ExpressError");

//Protect Route
//  app.use("/api", (req, res, next) => {
//    let { token } = req.query;
//    if(token === "giveaccess"){
//     next();
//    }
//    res.send("Access Denied!");
//  });
// app.get("/api", (req, res) => {
//   res.send("Take Data");
// });
  

//Passing Multiple Middleware
 const cheackToken = (req, res, next) => {
  let { token } = req.query;
  if(token === "giveaccess"){
   next();
  }
  throw new ExpressError(401, "Access Denied!");
};
  
app.get("/api", cheackToken, (req, res) => {
  res.send("Take Data");
});
 

//Error show in Fronted
app.get("/err", (req, res) => {
  abcd = abcd;
})
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access is forbiden");
});
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});
 
 
  //Main route
 app.get("/", (req, res) => {
    res.send("Root is working");
  });
  
  
  app.listen(8080, () => {
   console.log("Server listening on port 8080");
  });

