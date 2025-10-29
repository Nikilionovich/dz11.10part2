const path = require("path");
const fs = require("fs");
const url = require("url")
const { contentTypes } = require("../data/data");
const defaultconroll = (req, res) => {
    const parsedUrl = url.parse(req.url, false);
    parsedUrl.pathname = decodeURI(parsedUrl.pathname);
    let filepath = path.join(__dirname,"../public", parsedUrl.pathname);
    fs.access(filepath, fs.constants.R_OK, (errors) => {
        if (errors) {
            res.writeHead(404, { "Content-type": "text/html; charset=utf-8;" })
            filepath = path.join(__dirname, "../", "public", "html", "pagenotfound.html")
            fs.createReadStream(filepath).pipe(res)
        }
        else {
            const exetname = path.extname(filepath);
            const ContentType = contentTypes[exetname] || "application/octet-stream";
            res.writeHead(200, { "Content-type": ContentType });
            fs.createReadStream(filepath).pipe(res);
        }
    })
}
module.exports = { defaultconroll }