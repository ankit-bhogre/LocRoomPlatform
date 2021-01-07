import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import "./assets/base.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login'; 
import Home from './Components/Home';  
import News from './Components/News'; 
import Negotiation1 from './Components/Rooms/Negotiation1'; 
import configureStore from "./config/configureStore";

import './i18n';

import { Provider } from "react-redux";
const store = configureStore();

export default function App() {
	
  return (
    <Provider store={store}>
		<Router>
			<Switch>
				<Route path="/negotiation1"><Negotiation1 /></Route>
				<Route path="/home"><Home /></Route>
				<Route path="/news"><Suspense fallback={(<div>Loading</div>)}><News /></Suspense></Route>
				<Route path="/"><Login /></Route>
			</Switch>
		</Router>
	</Provider>
  );
} 
  
ReactDOM.render(<App/>,document.querySelector('#root'));