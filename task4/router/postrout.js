const {lastcontrollerpost}=require("../controller/postcontroller.js");
const {defaultconroll}=require("../controller/defaulteconroller")
const methodpost=(req,res)=>{
switch (req.url) {
    case "/api/posts":
        lastcontrollerpost(req,res)
        break;
    default:
        defaultconroll(req,res);
        break;
}
}
module.exports=methodpost;