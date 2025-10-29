const port=3000;
const fs=require("fs");
const path=require("path")
const contentTypes = {
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp",
  
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
  };
  let arrmassege=[
    ...JSON.parse(fs.readFileSync(path.join(__dirname,"massage.json"),"utf-8"))
  ];
  module.exports={port,contentTypes,arrmassege};