import React from 'react'
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3'
// import Fetch from './components/Fetch'
import FormText from './components/FormText'

import './App.css'


function App(){
    return(
        <div>
            <App1/>
            <App2/>
            <App3/>
            <FormText/>
        </div>
    )
}

export default App