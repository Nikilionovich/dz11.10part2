const { typeinstitutions, specialization, trainingformat, sexcomposition, nameofstudy } = require("../data/data.js")
let count=0;
const randomint=(min,max)=>{
    return min + Math.floor(Math.random() * (max - min + 1));
};
const randomfloat=(min,max)=>{
    return (min +(Math.random()*(max - min + 0.1))).toFixed(2);
}
module.exports={randomint,randomfloat};