import express from "express";
const newApp = express();
const port = 3001;

newApp.get("/", (req, res) => {
    res.send("<h1>hello</h1> <h3>Unuching</h3>")
    
});

newApp.get("/about", (req,res)=>{
    res.send("My name is Unuching Marma")
})

newApp.get("/contact", (req,res)=>{
    res.send("My Mobile number is 01832346651")
})
newApp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
