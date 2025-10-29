const { defaulteconroller } = require("../controller/dafauleteconroller");
const { calcpost } = require("../controller/calc");
const { listcalulatemote } = require("../controller/list-calc");
const {complexconrtroller}=require("../controller/Complexcalc");
const methodpost = (req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(302, { Location: "/index.html" });
            break;
        case "/calc":
            calcpost(req, res);
            break;
        case "/list-calc":
            listcalulatemote(req, res);
            break;
            case"/complex-calc":
            complexconrtroller(req,res)
            break;
        default:
            defaulteconroller(req, res);
            break;
    }
}
module.exports = methodpost;