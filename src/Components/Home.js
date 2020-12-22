import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'; 

export class Home extends Component { 

	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  cms_data: []
		}
	  }
 	  
	async componentDidMount() {
		const response = await fetch('http://localhost/myshoetips/api/home_cms');
		const result = await response.json();
		this.setState({ cms_data: result });
	}
	
	getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return 1; //to handle the case where the value doesn't exist
    }

    render() {  
		
		 const { error, cms_data} = this.state;
		  
	  	//console.log(_.findIndex(cms_data, { id: '2'})); 
		 const html  = cms_data.hp_content;
		 const hp_title_two  = cms_data.title_two;
		 const hp_subtitle  = cms_data.subtitle;
		 const hp_subtitle_two  = cms_data.subtitle_two;
        return (  
        <div>
			<Login />  
        </div>
        )  
    }  
}  
export default Home