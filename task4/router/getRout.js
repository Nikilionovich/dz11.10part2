const url=require("url")
const{messcontroller}=require("../controller/allmessegecontroller");
const { messegebyusername}=require("../controller/messegebyusername");
const {defaultconroll}=require("../controller/defaulteconroller");
const methodget=(req,res)=>{
const parsedname=url.parse(req.url,true);
 switch (parsedname.pathname) {
     case "/":
         res.writeHead(302,{location:"/index.html"})
         res.end();
         break;
         case "/api/posts":
            messcontroller(req,res);
            break;
            case"/api/posts/123":
            messegebyusername(req,res);
            break;
     default:
        defaultconroll(req,res)
         break;
 }
}
module.exports=methodget;