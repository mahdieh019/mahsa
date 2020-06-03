import React ,{Component} from 'react';
import './App.css';

// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       answer:"yes"
//     }
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1>Is State important to know? {this.state.answer}</h1>
//         <ChildComponent answer={this.state.answer}/>
//       </div>
//     );
//   }
  
// }

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Mahsa",
//       age:23
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     )
//   }
// }


class App extends Component{
  constructor(){
    super()
    this.state={
      isLoggedIn:true
    }
  }
  render(){
    return(
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in":"out"}</h1>
      </div>
    )
  }
}

export default App;
