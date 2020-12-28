import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// faTwitter, faInstagram,
import {faLinkedinIn, faFacebookSquare,faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import Dropdown from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import bg1 from "../assets/utils/images/originals/city.jpg";
import bg2 from "../assets/utils/images/originals/citydark.jpg";
import bg3 from "../assets/utils/images/originals/citynights.jpg";
// import brazilflag from "../assets/custom_images/brazil-flag.svg";
// import usflag from "../assets/custom_images/united-states-of-america-flag.svg";
import toplogo from "../assets/utils/images/logo.png";
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
          {/* header code here for login */}
		  <Row className="no-gutters">	
		  	<div className="container-fluid">
			  <Col lg="10" md="10" sm="8"  className="fl top_logo col-8">
			  	<div><Link to="/"><img className="" src={toplogo} alt=""/></Link></div>
			  </Col>		  
			  {/* <Col lg="7" md="7" sm="12" className="fl">
			  	<div className="">
            <h2>Banner</h2>
          </div>
			  </Col>		   */}
			  <Col lg="2" md="2" sm="4"  className="fl top_social_icons pt-3 col-4">
        <Dropdown className="top_flagicons_dropdown">
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="top_flagicons_togle">
          <img className="top_flagicons_img" src={require('../assets/custom_images/usaflag.png')}></img>  
          </Dropdown.Toggle>

          <Dropdown.Menu className="top_flagicons_menu">
            <Dropdown.Item href="#/action-1" className="top_flagicons_items"><img className="top_flagicons_img" src={require('../assets/custom_images/usaflag.png')}></img></Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="top_flagicons_items"><img className="top_flagicons_img" src={require('../assets/custom_images/brazilflag.png')}></img></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
				{/* <a className="" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
				<a className="" href="#"><FontAwesomeIcon icon={faInstagram} /></a> */}
        {/* ************* */}
        
        {/* <img src={require('../assets/custom_images/icons8-brazil-96.png')}></img>
          <select name="top_language_option" id="top_language_id">
              <option value="volvo"><img src={require('../assets/custom_images/icons8-brazil-96.png')}></img></option>
              <option value="saab"  style={{backgroundImage: "url(../assets/custom_images/icons8-brazil-96.png)"}}>++Saab</option>
          </select> */}
        {/* ************* */}
			  </Col>
			  </div>
			</Row>
			<Row className="no-gutters">
		  <nav className="navbar navbar-expand-lg navbar-dark  bg-dark  w-100">
		  <div className="container-fluid">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse tp_nav" id="navbarNav">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item active">
					<Link className="nav-link" to="#">The Platform</Link>
				  </li>
				  <li className="nav-item">
					<Link className="nav-link" to="#">Plan</Link>
				  </li>
				  <li className="nav-item">
					<Link className="nav-link" to="#">Support</Link>
				  </li>
				</ul>
			  </div></div>
			</nav>
			</Row>

      {/* header code close here  */}
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
                <h6 className="mt-3 lp_register">
                  Not registred?{" "}
                  <Link href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Register Now!
                  </Link>
                </h6>
                <Row className="divider" />
                <div>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Input type="email" name="email" className="lp_form_input" id="exampleEmail" placeholder="Username or email"/>
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Input type="password" name="password" className="lp_form_input" id="examplePassword" placeholder="Password"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="d-flex flex-column align-items-end">
                      <div className="loginForm_btndiv">
                        {/* <Link to="/" className="btn-lg btn btn-link" >
                          Forgot your password?
                        </Link>{" "} */}
                        <Link to="/dashboard"><Button color="primary" className="loginForm_lg_btn" size="lg">
                          Log In
                        </Button></Link>
                      </div>
                      <div className="lp_forgotpassword">
                          <Link to="/" className="btn-lg btn btn-link lp_forgotps_link" >
                          Forgot your password?
                        </Link>{" "}
                      </div>
                    </div>
					<div className="login_with">
						<h5 className="lp_cnwith_text">Or continue with:</h5>
						<a href="#"><div className="col-md-2 lp_loginwith_icon lp_login_icon1"><FontAwesomeIcon  className="lp_social_icon lp_social_fb" icon={faFacebookSquare} /><span className="lp_social_text">facebook</span></div></a>
						{/* <a href="#"><div className="col-md-2 lp_loginwith_icon"><FontAwesomeIcon  className="lp_social_icon lp_social_google" icon={faGoogle} /><span className="lp_social_text">google</span></div></a> */}
            <a href="#"><div className="col-md-2 lp_loginwith_icon lp_login_icon2"><img className="lp_social_google" src={require('../assets/custom_images/google_icon.png')}></img><span className="lp_social_text lp_social_google">google</span></div></a>
            {/* <div className="col-md-2 lp_loginwith_icon"><img className="lp_social_google" src={require('../assets/custom_images/google_icon.png')}></img> <span className="lp_social_text lp_google_text">google</span></div> */}
						<a href="#"><div className="col-md-2 lp_loginwith_icon lp_login_icon1"><FontAwesomeIcon  className="lp_social_icon lp_social_linked" icon={faLinkedinIn} /><span className="lp_social_text">linkedin</span></div></a>
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
