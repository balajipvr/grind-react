import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Customers from './Customers/Customers'
import Login from './Login/Login'

function App() {
  return (
    <Switch>
        <Route exact path = '/' component ={Login}/>
        <Route exact path = '/home' component ={Home}/>
        <Route exact path = '/customers' component = {Customers}/>
    </Switch>
  );
}

export default App;