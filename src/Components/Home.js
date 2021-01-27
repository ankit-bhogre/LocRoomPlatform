import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import cx from "classnames";

import ResizeDetector from "react-resize-detector";
//import AppMain from "../Layout/AppMain";
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import ProfilePageTitle from "../Layout/AppMain/ProfilePageTitle";
import Footer from "./Footer"; 
//import { Route, Switch, Redirect } from 'react-router-dom';  
export class Home extends Component {  
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
			<ResizeDetector
				handleWidth
				render={({ width }) => (
			<Fragment>
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
									<ProfilePageTitle heading="Home" subheading="" icon="" pagenamechk="home"  />
									<h3 className="pl-20 pt-20">Home Page</h3>									  
								</div>
							</div>
						</div>
						
					</div>
					<Footer />	
					</Fragment>  
				)}
			  />
			
            
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

export default withRouter(connect(mapStateToProp)(Home));