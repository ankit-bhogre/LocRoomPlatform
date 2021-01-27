import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// faTwitter, faInstagram,
import {faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// the hoc
 
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

import RegModal from "./RegModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import Footer from "./Footer"; 
import TopNavbar from "./TopNavbar"; 
import { withNamespaces } from 'react-i18next';

export class Login extends Component {
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
	const { t } = this.props; 
    return (
	  <Fragment>
        <div className="h-100">
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
				<TopNavbar />
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
                      <h3>{t('lbl_banner_heading1')}</h3>
                      <p>
                      {t('lbl_banner_text1')}
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                    <div className="slide-img-bg"
                      style={{
                        backgroundImage: "url(" + bg3 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>{t('lbl_banner_heading2')}</h3>
                      <p>
                      {t('lbl_banner_text2')}
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                    <div className="slide-img-bg opacity-6"
                      style={{
                        backgroundImage: "url(" + bg2 + ")",
                      }}/>
                    <div className="slider-content">
                      <h3>{t('lbl_banner_heading3')}</h3>
                      <p>
                      {t('lbl_banner_text3')}
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
                  <div className="txtcap">{t('lbl_login_welcome')}</div>
                </h4>				
                  <div className="lp_title">{t('lbl_login_tagline')}</div>
                <h6 className="mt-3 lp_register">
                  {t('lbl_login_not_reg')}{" "}
                  <RegModal /> 
                </h6>
                <div>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Input type="email" name="email" className="login-fds" id="exampleEmail" placeholder={t('lbl_login_username_fd')}/>
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Input type="password" name="password" className="login-fds" id="examplePassword" placeholder={t('lbl_login_pass_fd')}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="d-flex flex-column align-items-end">
                      <div className="loginForm_btndiv">
                        {/* <Link to="/" className="btn-lg btn btn-link" >
                          Forgot your password?
                        </Link>{" "} */}
                        <Link to="/home"><Button color="primary" className="loginForm_lg_btn" size="lg">
                          {t('lbl_login_login_btn')}
                        </Button></Link>
                      </div>
                      <div className="lp_forgotpassword">
                         <ForgotPasswordModal />
                      </div>
                    </div>
					<div className="login_with">
						<h5 className="lp_cnwith_text">{t('lbl_login_continue_social')}:</h5>
						<Link to="#"><div className="col-md-3 lp_loginwith_icon lp_login_icon1"><FontAwesomeIcon  className="lp_social_icon lp_social_fb" icon={faFacebookSquare} /><span className="lp_social_text">facebook</span></div></Link>
						{/* <a href="#"><div className="col-md-2 lp_loginwith_icon"><FontAwesomeIcon  className="lp_social_icon lp_social_google" icon={faGoogle} /><span className="lp_social_text">google</span></div></a> */}
            <Link to="#"><div className="col-md-3 lp_loginwith_icon lp_login_icon2"><img alt="" className="lp_social_google" src={require('../assets/custom_images/google_icon.png')}></img><span className="lp_social_text lp_social_google">google</span></div></Link>
            {/* <div className="col-md-2 lp_loginwith_icon"><img className="lp_social_google" src={require('../assets/custom_images/google_icon.png')}></img> <span className="lp_social_text lp_google_text">google</span></div> */}
						<Link to="#"><div className="col-md-3 lp_loginwith_icon lp_login_icon1"><FontAwesomeIcon  className="lp_social_icon lp_social_linked" icon={faLinkedinIn} /><span className="lp_social_text">linkedin</span></div></Link>
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
export default withNamespaces()(Login);