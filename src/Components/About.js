import React, { Component, Suspense, Fragment } from 'react'; 
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import cx from "classnames";
import {
    setBackgroundColor,
    setColorScheme,
    setBackgroundImage,
    setBackgroundImageOpacity,
    setEnableBackgroundImage,
    setEnableFixedHeader,
    setEnableHeaderShadow,
    setEnableSidebarShadow,
    setEnableFixedSidebar,
    setEnableFixedFooter,
    setHeaderBackgroundColor,
    setEnablePageTitleSubheading,
    setEnablePageTabsAlt,
    setEnablePageTitleIcon,
} from '../reducers/ThemeOptions';

import ResizeDetector from "react-resize-detector";
//import AppMain from "../Layout/AppMain";
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import PageTitle from "../Layout/AppMain/PageTitle";


 
//import { Route, Switch, Redirect } from 'react-router-dom';  
 class About extends Component {  
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
								<div className="app-main__inner">
									<PageTitle heading="Form Controls"
										subheading="Wide selection of forms controls, using the Bootstrap 4 code base, but built with React."
										icon="pe-7s-display1 icon-gradient bg-premium-dark"/>
								</div>
							</div>
						</div>
				
					</div>
				)}
			  />
				
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

export default withRouter(connect(mapStateToProp)(About));