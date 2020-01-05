import React from 'react';
import logo from './logo.svg';
import './styles/app.less';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {Login} from './views/login'
import {Home} from './views/home'

function App() {
  return (
    <div className="App">
    <Router>
      <Redirect path="/" exact to="/home"/>
      <Route path="/login" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
    </Router>
    </div>
  );
}

export default App;
