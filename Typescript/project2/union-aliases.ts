type Combinable= number | string;  //union types  (alias)
type conversionDescriptor='as-number'|'as-text'  ;  //literal types (alias)

function add(
        n1:Combinable, 
        n2:Combinable,
        resultConversion:conversionDescriptor       //just these 2 strings not any string
        // resultConversion:string
        ){
    let result;
    if(typeof n1==='number' && typeof n2==='number' || resultConversion==='as-number' ){
        result= +n1 + +n2;

    }else{
        result=n1.toString() + n2.toString();
    }
    return result;
    // if(resultConversion==='as-number'){
    //     return +result; //return parseFloat(result);
    // }else{
    //     return result.toString();
    // }
    
}
console.log(add(12,3,'as-number'));
console.log(add('12','3','as-number'));

console.log(add('Mahsa','Nasr','as-text'))