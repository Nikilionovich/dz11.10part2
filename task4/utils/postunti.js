const fs=require("fs")
const path=require("path")
let {arrpost}=require("../data/data");
const createnewmassange = (title1,content1,author1) => {
const post={
    id:arrpost.length+1,
    title:title1,
    content:content1,
    author:author1,
    createdAt: new Date().toISOString()
}
arrpost.push(post)
fs.writeFileSync(path.join(__dirname,"../data/post.json"),JSON.stringify(arrpost,null,2),"utf-8");
return post;
}
module.exports={createnewmassange};