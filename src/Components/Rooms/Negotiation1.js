import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import cx from "classnames";

import ResizeDetector from "react-resize-detector";
//import AppMain from "../Layout/AppMain";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import PageTitle from "../../Layout/AppMain/PageTitle";
import Footer from "../Footer"; 
import MetisMenu from 'react-metismenu';
import PerfectScrollbar from "react-perfect-scrollbar";
import testimg from "../../assets/usaflag.png"
// import { MainNav} from "./Roomnavbar";

import Roomnavbar from "./Roomnavbar";
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
								<div className="app-main__inner">
									 <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
									<PageTitle heading="Negotiation Room" subheading="Negotiation 1" icon="pe-7s-door-lock"/>
								<div>
                  {/* ***** */}
                  {/* <PerfectScrollbar>
                     <div className="app-sidebar__inner">
                    <MetisMenu content={MainNav}  className="vertical-nav-menu"   />
                    </div>
                  </PerfectScrollbar> */}
                 
                 <Roomnavbar />
              {/* ******* */}
                </div>
               
                	{/* <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
										<TabPane tab={<span>  <img className="a" src={testimg} width="20" height="20" />Tab1 </span>} key="1">
											Timeline
										</TabPane>
										<TabPane tab={<span>  <img className="a" src={testimg} width="20" height="20" />Tab2 </span>} key="2">
											Details
										</TabPane>
										<TabPane tab={<span>  <img className="a" src={testimg} width="20" height="20" />Tab3 </span>} key="3">
											Proposal
										</TabPane>
									</Tabs> */}
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

export default withRouter(connect(mapStateToProp)(Negotiation1));