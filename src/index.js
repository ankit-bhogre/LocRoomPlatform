import React from "react";
import ReactDOM from 'react-dom';
import "./assets/base.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login'; 
import About from './Components/About'; 
import configureStore from "./config/configureStore"; 

import { Provider } from "react-redux";
const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
		<Router>
			<Switch>
				<Route path="/about"><About /></Route>
				<Route path="/"><Login /></Route>
			</Switch>
		</Router>
	</Provider>
  );
} 
  
ReactDOM.render(<App/>,document.querySelector('#root'));