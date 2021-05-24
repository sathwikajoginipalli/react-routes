import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import User from './components/User'
class App extends Component {
  render() { 
    return ( <Router>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/user">User</NavLink></li>
      </ul>
      
      <Route path="/" exact strict render={
        ()=>{
          return(<h1>I'm Home</h1>)
        }
      }></Route>
        <Route path="/about" exact strict render={
        ()=>{
          return(<h1>I'm About</h1>)
        }
      }></Route>
      <Route path="/user" exact strict render={
        ()=>{
          return(<User/>)
        }
      }></Route>


    </Router> );
  }
}
 
export default App;