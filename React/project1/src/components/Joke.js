import React from 'react'

const Joke=(props)=>{
    return(
        <div className="joke">
            <h3 style={{display: !props.question && "none"}}>Question:{props.question} </h3>
            <h3 style={{color: !props.question && "gray"}}>Answer: {props.punchline} </h3>
            <hr/>
        </div>
    )
    
}
export default Joke