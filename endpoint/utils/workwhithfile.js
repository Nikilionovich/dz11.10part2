const { arrhistory } = require("../data/data");
const fs = require("fs");
const path = require("path")
const createhistorycalc = (A, B, OP, res) => {

    let obj = {
        tymestamp: new Date().toISOString(),
        A1: A,
        B1: B,
        OP1: OP,
        RES: res
    }
    arrhistory.push(obj);
    fs.writeFileSync(path.join(__dirname, "../data", "gistory.json"), JSON.stringify(arrhistory, null, 2), "utf-8");
}
const createhistorylistcal = (mass, sum) => {
    i = 0;
    for (const el of mass) {
        createhistorycalc(el.A, el.B, el.OP, sum[0]);
        i++;
    }
}
const checkrepeatcalc = (A, B, OP) => {
    let haveornot=arrhistory.find(value => {
        if((value.A1 == A  && value.B1 == B  && value.OP1 == OP)) {
            return value;}
    }
    )
    if(haveornot==undefined) return undefined;
    else return haveornot.RES;
}
const checkrepeatlistcalc=(mass)=>{
    let sum=[];
for (const el of mass) {
        sum.push(checkrepeatcalc(el.A, el.B, el.OP));
    }
    
    return sum;
}
module.exports = { createhistorycalc, createhistorylistcal,checkrepeatcalc,checkrepeatlistcalc };