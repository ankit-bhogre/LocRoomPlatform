import React from "react";
import ReactDOM from 'react-dom';
import "./assets/base.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import Home from './Components/Home'; 
import About from './Components/About'; 
import Contact from './Components/Contact'; 
import Maintenance from './Components/Maintenance'; 
import Airductcleaning from './Components/Airductcleaning'; 

export default function App() {
  return (
    <Router>
        <Switch>
			<Route path="/air-duct-cleaning"><Airductcleaning /></Route>
			<Route path="/maintenance"><Maintenance /></Route>
			<Route path="/about"><About /></Route>
			<Route path="/contact"><Contact /></Route>
			<Route path="/"><Home /></Route>
        </Switch>
    </Router>
  );
} 
  
ReactDOM.render(<App/>,document.querySelector('#root'));