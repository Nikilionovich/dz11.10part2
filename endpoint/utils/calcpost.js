const dosomethwithnum=(a1,b2,op3)=>{
    let sum;
    if(op3=="+")sum=a1+b2; 
    if(op3=="-")sum=a1-b2; 
    if(op3=="*")sum=a1*b2; 
    if(op3=="/")sum=a1/b2; 
    if(op3=="%")sum=a1%b2;
    return sum; 
}
const dosomthwhithmasobj=(mass)=>{
    let summass=[];
for (const el in mass) {
    if(el.OP=="+")summass[summass.length]=a1+b2; 
    if(el.OP=="-")summass[summass.length]=a1-b2; 
    if(el.OP=="*")summass[summass.length]=a1*b2; 
    if(el.OP=="/")summass[summass.length]=a1/b2; 
    if(el.OP=="%")summass[summass.length]=a1%b2;
}
return summass;
}
const complexdosome=(obj)=>{
const {A,OP}=obj;
let sum=0;
if (OP=="+") {
    for (let i = 0; i < A.length; i++) {
        sum+=A[i]      
    }
}
else {
    sum=1;
    for (let i = 0; i < A.length; i++) {
        sum*=A[i]      
    }
}
return sum;
}
module.exports={dosomethwithnum,dosomthwhithmasobj,complexdosome};