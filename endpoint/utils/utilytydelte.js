const { arrhistory } = require("../data/data");
const fs=require("fs");
const path=require("path")
const fofdelisory=()=>{
arrhistory.length=0;
fs.writeFileSync(path.join(__dirname,"../data","gistory.json"),JSON.stringify(arrhistory,null,2),"utf-8");
}
module.exports={fofdelisory}