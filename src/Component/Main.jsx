import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NameList from './NameList';
import Details from './Details';
import EventDetails from './Pages/eventdetails';

function Main() {
    return (
        <Router>
             
    
        <Switch>
        
        <Route path='/eventdetails'><EventDetails/></Route>
          <Route path='/'><NameList/></Route>
          
          
        </Switch>
       
      </Router>
     
     
  
    );
  }
  
  export default Main;