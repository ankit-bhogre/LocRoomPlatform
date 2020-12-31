import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// faTwitter, faInstagram,
import {faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// the hoc
import i18nIns from '../i18n';
import {withNamespaces,initReactI18next, useTranslation,withTranslation,reactI18nextModule} from 'react-i18next';
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import translationUS from '../locales/US/translation.json';
import translationBR from '../locales/BR/translation.json';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import Dropdown from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';
//import Dropdown from 'react-bootstrap/Dropdown';
import bg1 from "../assets/utils/images/originals/city.jpg";
import bg2 from "../assets/utils/images/originals/citydark.jpg";
import bg3 from "../assets/utils/images/originals/citynights.jpg";
// import brazilflag from "../assets/custom_images/brazil-flag.svg";
// import usflag from "../assets/custom_images/united-states-of-america-flag.svg";
import toplogo from "../assets/utils/images/logo.png";
// E:\cps_indore\admin_dashboard\reactjs\lockroom_cps\ankit_\LocRoomPlatform\src\Layout\AppHeader\index.js
// src\Layout\AppHeader\Components\HeaderDots.js
import HeaderDots from "../Layout/AppHeader/Components/HeaderDots";
import { Col, Row, Button, Form, FormGroup, Input } from "reactstrap";
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
    // const {t} = useTranslation('translation');
    // function App ({ t }) {
    //   const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    //   }
    // }
    // changeLanguage = (lng) => {
    //   i18n.changeLanguage(lng);
    // }
    // function changeLanguage(lang){console.log('fn',lang); i18n.changeData('may');};
    const changeLanguage = lng => {
      console.log('+++',lng);
      i18nIns.changeLanguage('br', (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        t('key'); // -> same as i18next.t
      });
    };
  //   const resources = {
  //     us: {
  //       translation: translationUS
  //     },
  //     br: {
  //       translation: translationBR
  //     }
  //   };
  //   function switchLang(lang) {
  //     console.log('----',lang);
      
  //     i18nIns.changeLanguage('en-US');

  // }

    return (
	  <Fragment>
        <div className="h-100">
        {/* <button onClick={() => changeLanguage('br')}>us</button>
        <button onClick={() => changeLanguage('us')}>br</button>
        <h1>{i18nIns.t('Welcome to React')}</h1> */}

          {/* header code here for login */}
		  <Row className="no-gutters header-1">	
		  	<div className="container-fluid">
			  <Col lg="10" md="10" sm="8"  className="fl top_logo col-8">
			  	<div><Link to="/"><img className="" src={toplogo} alt=""/></Link></div>
			  </Col>		  
			  {/* <Col lg="7" md="7" sm="12" className="fl">
			  	<div className="">
            <h2>Banner</h2>
          </div>
			  </Col>		   */}
			  <Col lg="2" md="2" sm="4"  className="fl top_social_icons pt-2 col-4">
          <HeaderDots />
        {/* <Dropdown className="top_flagicons_dropdown">
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="top_flagicons_togle">
          <img className="top_flagicons_img" alt="" src={require('../assets/custom_images/usaflag.png')}></img>  
          </Dropdown.Toggle>

          <Dropdown.Menu className="top_flagicons_menu">
            <Dropdown.Item href="#/action-1" className="top_flagicons_items"><img alt="" className="top_flagicons_img" src={require('../assets/custom_images/usaflag.png')}></img></Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="top_flagicons_items"><img alt="" className="top_flagicons_img" src={require('../assets/custom_images/brazilflag.png')}></img></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
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
                        <Link to="/home"><Button color="primary" className="loginForm_lg_btn" size="lg">
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
						<Link to="#"><div className="col-md-2 lp_loginwith_icon lp_login_icon1"><FontAwesomeIcon  className="lp_social_icon lp_social_fb" icon={faFacebookSquare} /><span className="lp_social_text">facebook</span></div></Link>
						{/* <a href="#"><div className="col-md-2 lp_loginwith_icon"><FontAwesomeIcon  className="lp_social_icon lp_social_google" icon={faGoogle} /><span className="lp_social_text">google</span></div></a> */}
            <Link to="#"><div className="col-md-2 lp_loginwith_icon lp_login_icon2"><img alt="" className="lp_social_google" src={require('../assets/custom_images/google_icon.png')}></img><span className="lp_social_text lp_social_google">google</span></div></Link>
            {/* <div className="col-md-2 lp_loginwith_icon"><img className="lp_social_google" src={require('../assets/custom_images/google_icon.png')}></img> <span className="lp_social_text lp_google_text">google</span></div> */}
						<Link to="#"><div className="col-md-2 lp_loginwith_icon lp_login_icon1"><FontAwesomeIcon  className="lp_social_icon lp_social_linked" icon={faLinkedinIn} /><span className="lp_social_text">linkedin</span></div></Link>
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
