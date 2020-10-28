import React, { Component } from 'react';
import SearchFilter from './Filer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './child/Details';

class App extends Component {
 
  render() {
    return(
     
     
     <Router>
             
    
     <Switch>
     
       <Route path='/details' exact component={Details} />
       <Route path='/' exact component={SearchFilter} />
       
     </Switch>
    
   </Router>
  
    
    )
    
   
  }
}

export default App;