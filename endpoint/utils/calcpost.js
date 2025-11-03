const{createhistorycalc}=require("../utils/workwhithfile")
const dosomethwithnum = (a1, b2, op3) => {
    let sum;
    if (op3 == "+") sum = a1 + b2;
    else if (op3 == "-") sum = a1 - b2;
    else if (op3 == "*") sum = a1 * b2;
    else if (op3 == "/") sum = a1 / b2;
    else if (op3 == "%") sum = a1 % b2;
    else throw new Error(`Операция "${op3}" не поддерживается`);;
    return sum;
}
const dosomthwhithmasobj = (mass, summass) => {
    let i = 0;
    for (const el of mass) {
        if (el.OP == "+") {
            if (summass[i] == undefined) {
                summass[i] = (parseInt(el.A) + parseInt(el.B));
                createhistorycalc(el.A,el.B,el.OP,summass[i]);
                i++;
            }

        }
        else if (el.OP == "-") {
            if (summass[i] == undefined) {
                summass[i] = (parseInt(el.A) - parseInt(el.B));
                 createhistorycalc(el.A,el.B,el.OP,summass[i]);
                i++;
            }
        }
        else if (el.OP == "*") {
            if (summass[i] == undefined) {
                summass[i] = (parseInt(el.A) * parseInt(el.B));
                 createhistorycalc(el.A,el.B,el.OP,summass[i]);
                i++;
            }

        }
        else if (el.OP == "/") {
            if (summass[i] == undefined) {
                summass[i] = (parseInt(el.A) / parseInt(el.B));
                 createhistorycalc(el.A,el.B,el.OP,summass[i]);
                i++;
            }

        }
        else if (el.OP == "%") {
            if (summass[i] == undefined) {
                summass[i] = (parseInt(el.A) % parseInt(el.B));
                 createhistorycalc(el.A,el.B,el.OP,summass[i]);
                i++;
            }
        }
        else {
            throw new Error(`Операция "${el.OP}" не поддерживается`);
        }

    }
    return summass;
}
const complexdosome = (obj) => {
    const { A, B } = obj;
    let sum = 0;
    if (B == "+") {
        for (let i = 0; i < A.length; i++) {
            sum += A[i]
        }
    }
    else {
        sum = 1;
        for (let i = 0; i < A.length; i++) {
            sum *= A[i]
        }
    }
    return sum;
}
module.exports = { dosomethwithnum, dosomthwhithmasobj, complexdosome };