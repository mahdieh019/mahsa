// const person:{
//     name:string;
//     age:number
// }={
//     name:"Mahsa",
//     age:30
// }

// const person:{
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string];
// }={
//     name:"Mahsa",
//     age:30,
//     hobbies:['Sport', 'cooking'],
//     role:[2,'author']
// }


//------------------------------Tuple--------------------
//person.role.push('admin');
// person.role[1]=10;
// console.log(person.role);   //[2, 10, "admin"]
//console.log(person.role);
// person.role=[10,'admin','user']; //typescript does not allowed to assign an extra element in 
                                //an array which has only two elements length, but allows to push it


//----------------------------Enum---------------

// const ADMIN=0;
// const READ_ONLY=1;
// const AUTHOR=2;

enum Role { 
            ADMIN=5, 
            READ_ONLY, 
            AUTHOR="Author"
        };

const person={
    name:"Mahsa",
    age:30,
    hobbies:['Sport', 'cooking'],
    role: Role.AUTHOR
}

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}


if(person.role===Role.AUTHOR){
    console.log(person.role);
}


//--------------------------------------------------
let stringNumberArray:any[];
stringNumberArray=['aa',12];
console.log(stringNumberArray);

let a:string[]
a=['b','c']
console.log(a)



