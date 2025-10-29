const dosomethwithnum=(a1,b2,op3)=>{
    let sum;
    if(op3=="+")sum=a1+b2; 
    if(op3=="-")sum=a1-b2; 
    if(op3=="*")sum=a1*b2; 
    if(op3=="/")sum=a1/b2; 
    if(op3=="%")sum=a1%b2;
    return sum; 
}
module.exports={dosomethwithnum};