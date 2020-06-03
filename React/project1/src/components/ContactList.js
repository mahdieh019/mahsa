import React from 'react'
import ContactCard from './ContactCard'

const ContactList=()=>{
    return(
<div className='contacts'>
        <ContactCard 
            contact={{
                name:"Mr. Whiskerson",
                imgUrl:"http://placekitten.com/300/200",
                phone:"Phone: (212) 55-1234",
                email:"mr.whiskerson@catnap.meow"}}
        />
        <ContactCard 
            contact={{
                name:"Fluufykins" ,
                imgUrl:"http://placekitten.com/301/200" ,
                phone:"(212) 55-1548" ,
                email:"mr.Fluufykins@gmail.com"
            }}
          
        />
        <ContactCard 
            contact={{
                name:"Destroyrer" ,
                imgUrl:"http://placekitten.com/302/200" ,
                phone:"(313) 55-1548" ,
                email:"mr.Destroyrer@gmail.com"
            }}
            
        />
        <ContactCard 
            contact={{
                name:"Schmit" ,
                imgUrl:"http://placekitten.com/304/200" ,
                phone:"(313) 55-1598", 
                email:"mr.Schmit@gmail.com"
            }}
           
        />

    </div>
    )
    
}
export default ContactList