const { dosomthwhithmasobj } = require("../utils/calcpost");
const { createhistorylistcal,checkrepeatlistcalc } = require("../utils/workwhithfile");
const listcalulatemote = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        try {
            const parseddata = JSON.parse(data);
            let sum=checkrepeatlistcalc(parseddata);
            sum=dosomthwhithmasobj(parseddata,sum);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ sum }));
        } catch (err) {
            if (err.message.includes("не поддерживается")) {
                res.writeHead(501, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    error: "Операция не поддерживается"
                }));
            }
        }

    })
}
module.exports = { listcalulatemote };