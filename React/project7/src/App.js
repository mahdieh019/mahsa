import React , {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }

    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    this.setState( preState =>{
      return{
        count: preState.count + 1
      }
    })
  }

  render(){
    return (
      <div className="App">
        <img onMouseOver={()=>console.log("moved")} src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <br/>
        <br/>
        <button onClick={()=>console.log("I was clicked!!!")}>Click me </button>

        
        <h1>{this.state.count}</h1>        console.log("is clicked")

        <button onClick={this.handleClick }>Change!</button>

        <ChildComponent count={this.state.count}/>
      </div>
    );
  }
  
}

export default App;
