
//------------------------------unknown ----------------

let userInput:unknown;  // using unknown we can not assign 'string' to 'unknown' but to 'any'
                        // 'unknown' is better choice than 'any' but we have to check 
let userName:string;

userInput=5;
userInput='Max';
// userName=userInput;
if(typeof userInput==='string' ){
    userName=userInput;
}
//-------------------------------never-------------------
function generateError(message:string, code:number):never{
    throw {message: message, errorCode: code };
  //  while(true){}
}

generateError('An error occurred!' , 500);