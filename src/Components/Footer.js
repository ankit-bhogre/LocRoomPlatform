import React, { Fragment, Component } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faYoutube, faTwitter, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Row } from "reactstrap";
import footerlogo from "../assets/utils/images/footer-logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>		  
		<Row className="no-gutters">	
			 <div className="content-two"><div className="container">Content 2</div></div>
		</Row>
		<Row className="no-gutters">	
			 <div className="content-three"><div className="container">Content 3</div></div>
		</Row>
		  <Row className="no-gutters footer-1">
		  <div className="container-fluid ">
			  <div className="row ">
			  	<div className="col-4">
					<div><img width={60} className="" src={footerlogo} alt=""/></div>
					<div className="footer-sec-one-div">Div</div>
				</div>
				<div className="col-2">
				  <h6>Rooms</h6>
				  <ul>
				  	<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
				  </ul>
				</div>
				<div className="col-2">
				  <h6>Services</h6>
				  <ul>
				  	<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
				  </ul>
				</div>
				<div className="col-2">
				  <h6>Documentation</h6>
				  <ul>
				  	<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
				  </ul>
				</div>
				<div className="col-2"><div className="app-footer-logo" /></div>
			  </div>
			</div>
		  </Row>
		  <Row className="no-gutters">
		  <div className="container-fluid">
			  <div className="row footer-2">				
				 <div className="col-8">
				 	<div class="text-left py-3">
						<ul>
							<li>2020 Locroom Platform</li>
							<li>Use Terms</li>
							<li>Security Policies</li>
						</ul>
					</div>
				 </div>
				 <div className="col-4">
					<div class="footer-copyright py-3">By Toca Projetos</div>
				 </div>
			 </div>
		  </div>
	  </Row>
      </Fragment>
    );
  }
}
