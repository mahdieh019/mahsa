import React ,{Component}from 'react'

class App3 extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
           
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(preState=>{
            return{
                isLoggedIn:!preState.isLoggedIn
            } 
        })
    }

    render(){
        let buttonText=this.state.isLoggedIn ? "LOG Out":"LOG IN"
        let displayText=this.state.isLoggedIn ? "logged in":"logged out"
        return(
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
   
}

export default App3