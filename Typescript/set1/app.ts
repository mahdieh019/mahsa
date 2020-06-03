//Interface
interface Person{
    fName:string;
    lName?:string;
}

function fullName(person:Person){
    console.log(`${person.fName} ${person.lName}`);
}

let p={
    fName:'Mahsa',
    lName:'Nasr'
}

fullName(p);

//Class

class Employee{

    employeeName:string;

    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1=new Employee('Mahsa');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    age:number
    constructor(managerName:string , age:number){
        super(managerName);
        this.age=age;
    }
    delegateWork(){
        console.log(`Manager delegateing tasks ${this.age}`);
    }
}

let m1=new Manager('Ali', 23);
m1.delegateWork();
m1.greet();
console.log(m1.age)