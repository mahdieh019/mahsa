import React ,{Component}from 'react';
import './App.css';

class Header extends Component{
  render(){
    return(
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends Component{
  render(){
    const date=new Date();
    const hour=date.getHours();
    let timeOfDay

    if(hour <12){
      timeOfDay="morning"
    }else if(hour>=12 && hour<=17){
      timeOfDay="afternoon"
    }else{
      timeOfDay="night"
    }
    return(
    <h1>Good {timeOfDay} to you</h1>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header username="Mahsa"/>
        <Greeting/>
      </div>
    );
  }  

}

export default App;
