const methodget = require("../router/getRout")
const methodpost=require("../router/postrout");
const routermethod = (req, res) => {
    switch (req.method) {
        case "POST":
            methodpost(req, res);
            break;
        case "GET":
            methodget(req, res);
            break;
        default:
            break;
    }

}
module.exports = routermethod;