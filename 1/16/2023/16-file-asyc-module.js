const {readFile, writeFile}=require("fs");
readFile('./content/first.txt', (err, result)=> {
    if(err){
      console.log(err); 
      return
  
    }


});


const first=readFileSync('./content/first.txt', 'utf-8');
const second=readFileSync('./content/second.txt', 'utf-8');
 

