import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faYoutube, faTwitter, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Row } from "reactstrap";
import footerlogo from "../assets/utils/images/footer-logo.svg";
import tocaproject from "../assets/custom_images/Toca-projetos.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebookSquare,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { withNamespaces } from 'react-i18next';
// default
export  class Footer extends Component {
  render() {
	const { t } = this.props; 
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
			  	<div className="col-4 col-md-3 col-lg-4">
					<div><img width={60} className="" src={footerlogo} alt=""/></div>
					<div className="footer-sec-one-div">Div</div>
				</div>
				<div className="col-4 col-md-2 col-lg-2">
				  <h6>{t('footer_nav_heading1')}</h6>
				  <ul>
				  	<li>{t('footer_nav_headig1_link1')}</li>
					<li>{t('footer_nav_headig1_link2')}</li>
					<li>{t('footer_nav_headig1_link3')}</li>
				  </ul>
				</div>
				<div className="col-4 col-md-2 col-lg-2">
				  <h6>{t('footer_nav_heading2')}</h6>
				  <ul>
				  	<li>{t('footer_nav_headig2_link1')}</li>
					<li>{t('footer_nav_headig2_link2')}</li>
					<li>{t('footer_nav_headig2_link3')}</li>
				  </ul>
				</div>
				<div className="col-6 pt-2 col-md-2 col-lg-2">
				  <h6>{t('footer_nav_heading3')}</h6>
				  <ul>
				  	<li>{t('footer_nav_headig3_link1')}</li>
					<li>{t('footer_nav_headig3_link2')}</li>
					<li>{t('footer_nav_headig3_link3')}</li>
				  </ul>
				</div>
				<div className="col-6 pt-2 col-md-2 col-lg-2"><h6  className="footer_followus_text">{t('footer_nav_heading4')}</h6>
				<div className="footer_social">
						<Link to="#"><div className="footer_social_inner"><FontAwesomeIcon  className="" icon={faYoutube} /></div></Link>
						<Link to="#"><div className="footer_social_inner"><FontAwesomeIcon  className="" icon={faFacebookSquare} /></div></Link>
						<Link to="#"><div className="footer_social_inner"><FontAwesomeIcon  className="" icon={faInstagram} /></div></Link>
					</div>
				{/* <div className="app-footer-logo" /> */}
				</div>
			  </div>
			</div>
		  </Row>
		  <Row className="no-gutters">
		  <div className="container-fluid">
			  <div className="row footer-2">				
				 <div className="col-8">
				 	<div class="text-left py-3">
						<ul>
							<li>{t('footer_bottom_terms1')}</li>
							<li>{t('footer_bottom_terms2')}</li>
							<li>{t('footer_bottom_terms3')}</li>
						</ul>
					</div>
				 </div>
				 <div className="col-4">
				 
					<div class="footer-copyright py-3">By <img className="" src={tocaproject} alt=""/></div>
				 </div>
			 </div>
		  </div>
	  </Row>
      </Fragment>
    );
  }
}

export default withNamespaces()(Footer);