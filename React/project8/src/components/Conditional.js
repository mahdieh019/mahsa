import React from 'react'

function Conditional (props){
    return(
        <div>
            {props.isLoading ? <h1>is Loading...</h1> :<h1>is not Loading</h1>}

        </div>

    )
   
}
export default Conditional