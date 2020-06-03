let myString:string='Hello World';
let myNum:number;
let myBool:boolean;
let myVar:any; 

// let strArr: string[];
// let numArr:number[];
// let boolArr:boolean[];

let strArr:Array<string>;
let numArr:Array<number>;
let boolArr:Array<boolean>;

let strNumTuple: [string,number];

// myString='Hello World';
myNum=22;
myBool=true;
myVar=false;

strArr=['Hello','world'];
numArr=[1,2,3];
boolArr=[true,false,true];

strNumTuple=['hello',4];

let myvoid:void=undefined;
let myNull:null=null;
let myUndifined=null;
console.log(myUndifined);

//string
let MyName:string='Mahsa';
let str:string=`My name is ${MyName} and live here.`
console.log(str);

//enum
enum Color{Red=5, Green, Blue}
let c: Color=Color.Green;
console.log(c);

//any
let randomValue:any=10;
randomValue=true;
randomValue='Mina'
console.log(randomValue);

// let myVariable:any=10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

//unknown
let myVariable:unknown=10;

function hasName(obj:any):obj is{name:string}{
    return !!obj&&
    typeof obj==="object"&&
    "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}

(myVariable as string).toUpperCase();


let a;
a=10;
a=true;

let b=20;
// b=true; //error   b is defined as number  


//union Type
let multiType:number|boolean;
multiType=20;
multiType=true;