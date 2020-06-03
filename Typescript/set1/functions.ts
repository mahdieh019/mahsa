function getSum(n1:number,n2:number):number{
    return n1 + n2;
}

// console.log(getSum(1,4));


let mySum=function(n1:any,n2:any):number{
    if(typeof n1=='string'){
        n1=parseInt(n1);
    }
    if(typeof n2=='string'){
        n2=parseInt(n2);
    }
    return n1 + n2;
}

//console.log(mySum('1','3'));


// optional parameter
function getName(fName:string,lName?:string):string{  //? make it optional which should be the secound parameter,
    if(lName==undefined){                             //if the first parameter is optional , should be on second 
        return fName;
    }
    return fName+ ' '+lName;
}
console.log(getName('Mahsa'));

function myVoid():void{
    return;
}

// default parameter
function sum(n1:number,n2:number =10):number{  
    if(n2)                             
        return n1 + n2;
    else
        return n1;
}

console.log(sum(5,10));
console.log(sum(5));