import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Addexample from './Components/Addexample.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './Components/Display.js'
import {BrowserRouter} from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navigation'

import Update from './Components/Update.js';

class App extends React.Component {
  constructor(props){
    super()
    this.state={
    
    }
  }
 
  render(){

    const home=()=>{
      return(<Display/>)
    }
    const add=()=>{
      return(<Addexample/>)
    }
    const update=()=>{
      return(<Update/>)
    }
    const nav23=()=>{
      return(<Navbar/>)
    }
  return (
    <div className="App">
       <BrowserRouter>
               <div >
              
                     
                      <Switch>
                          <Route path="/Search" component={nav23}/>
                          <Route path="/home" component={home}/>
                          <Route path="/add" component={add}/>
                          <Route path="/update" component={update}/>

                          <Redirect to="/home"/>
                       </Switch>
              </div>
                </BrowserRouter>
    </div>
  );
}
}



export default App;
