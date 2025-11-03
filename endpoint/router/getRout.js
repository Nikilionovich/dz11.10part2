const url=require("url")
const {defaulteconroller}=require("../controller/dafauleteconroller");
const methodget=(req,res)=>{
const parsedname=url.parse(req.url,true);
 switch (parsedname.pathname) {
     case "/":
         res.writeHead(302,{location:"/index.html"})
         res.end();
         break;
         case "/list-calc":
            res.writeHead(302, { Location: "/html/listcalc.html" });
             res.end();
            break;
        case"/complex-calc":
        res.writeHead(302, { Location: "/html/complexcalc.html" });
             res.end();
        break;
     default:
        defaulteconroller(req,res)
         break;
 }
}
module.exports=methodget;