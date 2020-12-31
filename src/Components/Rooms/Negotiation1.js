import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Link } from "react-router-dom";
import cx from "classnames";

import ResizeDetector from "react-resize-detector";
//import AppMain from "../Layout/AppMain";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import PageTitle from "../../Layout/AppMain/PageTitle";
import Footer from "../Footer"; 
//import { Route, Switch, Redirect } from 'react-router-dom';  
class Negotiation1 extends Component {  
   constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: false,
    };
  }
  render() { 
	 let {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props;
         return (
			<Fragment>
			<ResizeDetector
				handleWidth
				render={({ width }) => (
					<div
              className={cx(
                "app-container app-theme-" + colorScheme,
                { "fixed-header": enableFixedHeader },
                { "fixed-sidebar": enableFixedSidebar || width < 1250 },
                { "fixed-footer": enableFixedFooter },
                { "closed-sidebar": enableClosedSidebar || width < 1250 },
                {
                  "closed-sidebar-mobile": closedSmallerSidebar || width < 1250,
                },
                { "sidebar-mobile-open": enableMobileMenu },
                { "body-tabs-shadow-btn": enablePageTabsAlt }
              )}>
					  
					  <AppHeader /> 
						<div className="app-main">
							<AppSidebar />
							<div className="app-main__outer">
              {/* app-main__inner */}
								<div className="">
									 {/* <PageTitle heading="Negotiation Room 1" subheading="Wide selection of Room 1" icon="pe-7s-door-lock"/> */}
                   <div className="row negr1_headbody">
                    <div className="col-6 negr1_left">
                       {/* ----------------- */}
                    <div class="app-page-title negr1-page-title">
                      <div class="page-title-wrapper">
                        <div class="page-title-heading">
                          <div class="page-title-icon"><i class="pe-7s-home"></i></div>
                          <div className="negr1_heading_text">Negotiation Room<div class="negr1_heading_inner">Negotiatiom 1</div>
                         </div>
                       </div>
                      </div>
                    </div>
                    {/* ------------------ */}
                    </div>
                    <div className="col-6 negr1_right ">
                      <div className="negr1_right_navbody text-right"><ul className="negr1_right_nav">
                          <li><Link to="#home">Home</Link></li>
                          <li><Link to="#home">Rooms</Link></li>
                          <li><Link to="#home">Negotiation Room</Link></li>
                        </ul></div>

                      <div className="negr1_right_navbody1 text-right">3366666</div>
                    </div>
                    {/* ----------------- */}
                    {/* <div class="app-page-title negr1-page-title">
                      <div class="page-title-wrapper">
                        <div class="page-title-heading">
                          <div class="page-title-icon"><i class="pe-7s-home"></i></div>
                          <div>Home<div class="page-title-subheading">Wide selection of home</div>
                         </div>
                       </div>
                      </div>
                    </div> */}
                    {/* ------------------ */}
                   </div>
									 <div className="row">
									  	<h3 className="">Negotiation Room 1</h3>
									 </div>
								</div>
							</div>
						</div>
				
					</div>
				)}
			  />
			<Footer />	
            </Fragment>  
        )  
    }  
}  


  
const mapStateToProp = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default withRouter(connect(mapStateToProp)(Negotiation1));