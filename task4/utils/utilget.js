const {arrpost}=require("../data/data");
const getallmessseng=()=>
{
    const dublicate= arrpost;
    return dublicate;
}
const getmessbyusername=(id1)=>{
const dublicate=arrpost.filter((obj)=>obj.id==id1);
return dublicate;
}
module.exports={getallmessseng,getmessbyusername};