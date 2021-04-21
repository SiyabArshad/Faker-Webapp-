import React from 'react'
import Header from '../Layouts/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Container} from '@material-ui/core'
import Form from './form'
  const Home = () => {
    return ( 
<>
<Container>
<Header></Header>
<Form></Form>
</Container>
  </>
    )
}

export default Home