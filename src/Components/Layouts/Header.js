import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import '../../Stylesheets/App.css'
const Header = () => {
    return ( 
        <>
<nav id='navmain'>
  <div>
    <Link  id="navtxt" to='/'>MASTER WEB-SOLUTIONS</Link>
  </div>
</nav>
        </>
    )
}

export default Header