import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"

inquirer
  .prompt([
    {
      message: "Type your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("url.txt", url, (err)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("File Saved");
            
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
