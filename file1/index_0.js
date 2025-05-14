const fs = require("fs");

fs.writeFile("message.txt", "Hello from node js", (err) => {
  //   if (err) throw err;
  //   console.log("File saved");
  if (err) {
    console.error(err);
  } else {
    console.log("file saved");
  }
});
