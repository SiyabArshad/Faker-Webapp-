import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../src/Components/Pages/Home'
const App = () => {
    return (
        <Switch>
            <Router exact path='/'>
                <Home></Home>
            </Router>
        </Switch>

    );
}

export default App