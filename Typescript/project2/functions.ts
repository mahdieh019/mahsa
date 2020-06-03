// function add(n1:number, n2:number){
//     return n1.toString() + n2.toString();
// }
function add(n1:number, n2:number):number{
    return n1 + n2;
}

function printResult(num:number){
    console.log('Result: '+ num);
}
printResult(add(5,12));

//-------------------------normal js code---------------
// let combineValus;
// combineValus=add;
// console.log(combineValus(8,8));
//---------------------------------------function--------------

// let combineValus:Function;
// combineValus=add;
// combineValus=printResult;
// console.log(combineValus(8,8));


// let combineValus:(a:number, b:number)=>number;
// combineValus=add;
// console.log(combineValus(8,8));
//--------------------------------------callback function-------

function addAndHanddle(n1:number, n2:number, cb:(num:number)=>void){
    const result=n1 + n2;
    cb(result)
}

addAndHanddle(12,14,(result)=>{
    console.log(result);
    
})

// functions do not have undefined type
// we can not in the console call a function which its type is void means does not return any value
function printS(num:number):undefined{
    console.log('result: '+num);
    return;
}
        // these 2 functions are same

function printT(num:number):void{
    console.log('result: '+num);
}





