import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import cx from "classnames";

import ResizeDetector from "react-resize-detector";
//import AppMain from "../Layout/AppMain";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import PageTitle from "../../Layout/AppMain/PageTitle";
import Footer from "../Footer"; 
import Roomnavbar from "./Roomnavbar";
import {withNamespaces } from 'react-i18next';

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
    const { t } = this.props; 
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
                <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                <PageTitle heading={t('navigation1_title_heading')} subheading={t('navigation1_title_subheading')} icon="pe-7s-door-lock" imgsts="negoroomone" />
                <Roomnavbar />
                  </CSSTransitionGroup>							  
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


export default withRouter(connect(mapStateToProp)(withNamespaces()(Negotiation1))) ;