import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import ProfilePageTitle from "../Layout/AppMain/ProfilePageTitle";
import Footer from "./Footer";

import cx from "classnames";
import ResizeDetector from "react-resize-detector";

//import { Route, Switch, Redirect } from 'react-router-dom';  
export class Profile extends Component {  
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
								<div className="app-main__inner">
									<ProfilePageTitle heading="My Profile" subheading="Alina Mcloughlin" icon="" pagenamechk="profile"  />
									<div class="col-md-12 pt-10"><h3 className="">Profile Page</h3></div>
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
export default withRouter(connect(mapStateToProp)(Profile));