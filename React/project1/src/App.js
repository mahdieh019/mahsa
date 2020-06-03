import React from 'react';
import './style.css';
import Time from './components/Time'
import TodoItem from './components/TodoItem'
import ContactList from './components/ContactList'
import Joke from './components/Joke'
import jokeData from './components/jokeData'
// filter,map,sort,reduce,every,some,find,findeindex
function App(){

 const jokeComponents = jokeData.map(joke=> <Joke 
                                                key={joke.id} 
                                                question={joke.question} 
                                                punchline={joke.punchline}
                                            /> )
 
 return(
    <div className='todo-list'>
       <Time/>
       <TodoItem/>
       <TodoItem/>
       <TodoItem/>
       <TodoItem/>
       <ContactList/>
       <Joke question="What is your first bf's name?" punchline="MMMMMM"/>
        {jokeComponents}
      
    </div>
  )

}

export default App;
