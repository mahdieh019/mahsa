import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={
            unreadMessage:[
                "Call your mom",
                "New spam email"
            ]
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.unreadMessage.length >0 &&
                    <h2>You have {this.state.unreadMessage.length} unread Messages!</h2> 
                    
                }
               
            </div>
        )
    }
}

export default App