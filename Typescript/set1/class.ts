interface UserInterface{
    name:string; 
    email:string;
    age:number;
    register();
    payInvoice();
}

class User implements UserInterface{
    name:string; // private ,public, protected (is accessible only within parent and child)
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){
        this.name=name;
        this.email=email;
        this.age=age;

        console.log('user created: '+ this.name);
    }

    register(){   // private ,public, protected (is accessible only within parent and child)
        console.log(this.name+ ' is now registered');
    }

    payInvoice(){
        console.log(this.name + ' paid invoice')
    }
}

// let john=new User('Mahsa Nasr', 'mahsa@gmail.com', 23);
// console.log(john.age);

// john.register();

class Member extends User{
    id:number;

    constructor(id:number, name:string, email:string, age:number){
        super(name,email,age);
        this.id=id;
    }
    payInvoice(){
        super.payInvoice()
    }
}
let mike : User=new Member(1,'Mike Smith','mina@gmail.com',33);

mike.payInvoice();