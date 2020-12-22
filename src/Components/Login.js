import React, { Fragment, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import bg1 from "../assets/utils/images/originals/city.jpg";
import bg2 from "../assets/utils/images/originals/citydark.jpg";
import bg3 from "../assets/utils/images/originals/citynights.jpg";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "./Footer"; 

export default class Login extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true,
    };
    return (
	  <Fragment>
        <div className="h-100">
		  <Row className="no-gutters">	
		  	<div className="container">
			  <Col lg="3" md="3" sm="12" className="fl top_logo">
			  	<div className="app-logo" />
			  </Col>		  
			  <Col lg="7" md="7" sm="12" className="fl">
			  	<div className=""><h2>Banner</h2></div>
			  </Col>		  
			  <Col lg="2" md="2" sm="12" className="fl top_social_icons">
				<a className="" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
			  </Col>
			  </div>
			</Row>
			<Row className="no-gutters">
			
		  <nav className="navbar navbar-expand-lg navbar-dark  bg-dark  w-100">
		  <div className="container">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse tp_nav" id="navbarNav">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item active">
					<a className="nav-link" href="#">The Platform</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="#">Plan</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="#">Support</a>
				  </li>
				</ul>
			  </div></div>
			</nav>
			
			</Row>
          <Row className="h-100 no-gutters">
            <Col lg="7" className="d-none d-lg-block">
				
              <div className="slider-light">
			  	
                <Slider {...settings}>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                    <div className="slide-img-bg"
                      style={{
                        backgroundImage: "url(" + bg1 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>Perfect Balance</h3>
                      <p>
                        ArchitectUI is like a dream. Some think its too good to be true! Extensive collection of unified React Boostrap Components and Elements.
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                    <div className="slide-img-bg"
                      style={{
                        backgroundImage: "url(" + bg3 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>
                        Easily exclude the components you don require. Lightweight, consistent Bootstrap based styles across all elements and components
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                    <div className="slide-img-bg opacity-6"
                      style={{
                        backgroundImage: "url(" + bg2 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>Complex, but lightweight</h3>
                      <p>
                        Weve included a lot of components that cover almost all use cases for any type of application.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col lg="5" md="12" className="h-100  bg-white justify-content-center align-items-center">
              <Col lg="11" md="11" sm="12" className="mx-auto app-login-box">
			  	<p className="lp_sub_title"></p>
			  	<h4 className="mb-0">
                  <div className="txtcap">Welcome to a</div>
                </h4>				
                  <div className="lp_title">New Concept of Digital Platform</div>
                <h6 className="mt-3">
                  Not registred?{" "}
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Register Now!
                  </a>
                </h6>
                <Row className="divider" />
                <div>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" name="email" id="exampleEmail" placeholder="Email here..."/>
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password" name="password" id="examplePassword" placeholder="Password here..."/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="d-flex align-items-center">
                      <div className="ml-auto">
                        <Link to="/about" className="btn-lg btn btn-link" >
                          Forgot your password?
                        </Link>{" "}
                        <Button color="primary" size="lg">
                          Login to Dashboard
                        </Button>
                      </div>
                    </div>
					<div className="login_with">
						<h5>Or continue with:</h5>
						<div className="col-md-2"><FontAwesomeIcon icon={faFacebook} /></div>
						<div className="col-md-2"><FontAwesomeIcon icon={faGoogle} /></div>
						<div className="col-md-2"><FontAwesomeIcon icon={faLinkedin} /></div>
					</div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
		<Footer />
        </div>
      </Fragment>
    );
  }
}
