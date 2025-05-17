import express from "express";
const myApp = express();
const port = 3000;

myApp.get("/", (req, res) => {
  res.send("Hello Wold");
});

myApp.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
