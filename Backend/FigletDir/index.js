var figlet = require("figlet");

figlet("Ahnaf  Hasnain  Nahiun", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});