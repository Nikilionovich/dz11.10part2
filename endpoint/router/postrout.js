const { defaulteconroller } = require("../controller/dafauleteconroller");
const { calcpost } = require("../controller/calc");
const methodpost = (req, res) => {
    switch (req.url) {
        case "/calc":
            calcpost(req, res);
            break;
            case"/list-calc":
            
        default:
            defaulteconroller(req, res);
            break;
    }
}
module.exports = methodpost;