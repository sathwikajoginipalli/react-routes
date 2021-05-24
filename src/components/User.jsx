import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'
class User extends Component {
    render() { 
        return ( <Router>
            <ul>
              <li><NavLink to="/user1">John</NavLink></li>
              <li><NavLink to="/user2">Jill</NavLink></li>
              <li><NavLink to="/user3">Peter</NavLink></li>
            </ul>
            
            <Route path="/user1" exact strict render={
              ()=>{
                return(<h1>Hello John</h1>)
              }
            }></Route>
              <Route path="/user2" exact strict render={
              ()=>{
                return(<h1>Hello Jill</h1>)
              }
            }></Route>
            <Route path="/user3" exact strict render={
              ()=>{
                return(<h1>Hello Peter</h1>)
              }
            }></Route>
      
      
          </Router> );
    }
}
 
export default User;