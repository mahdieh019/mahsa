function add(num1:number, num2:number, show:boolean,res:string){
    const total=num1+num2;
    if(show){
        console.log(res+total)
    }else{
        return total
    }
}
const n1=5;
const n2=3.5;
const s=true;
const result='result is: '
add(n1,n2,s, result);
