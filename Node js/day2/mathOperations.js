

let add=(a, b)=>{
    return a+b;
} 

let subtract=(a, b)=>{
    return a-b;
} 

let multiply=(a, b) =>{
    return a*b;
}

let divide=(a, b)=>{
    if(b==0) throw new Error("Division by zero is not allowed");
    return a/b;
}

module.exports={add, subtract, multiply, divide};
