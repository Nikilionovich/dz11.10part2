const { createnewmassange } = require("../utils/postunti")
const lastcontrollerpost = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        let parseddata = JSON.parse(data);
        const {title,content,author } = parseddata;
        const arr = createnewmassange(title,content, author);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({arr}));
    })
}
module.exports = { lastcontrollerpost };