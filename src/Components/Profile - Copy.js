import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Sticky from 'react-stickynode';
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import ProfilePageTitle from "../Layout/AppMain/ProfilePageTitle";
import Footer from "./Footer";
import { Elastic } from 'react-burgers'
import {
    TabContent, TabPane, DropdownItem,
    CardBody, Collapse, FormGroup, Label, Input, FormFeedback, FormText,
    Card, Col, Row, CardHeader,
    Button
} from 'reactstrap';
import cx from "classnames";
import classnames from 'classnames';
import ResizeDetector from "react-resize-detector";

//import { Route, Switch, Redirect } from 'react-router-dom';  
export class Profile extends Component {  
   constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            active: false,
            collapse: false,
            accordion: [true, false, false],
            custom: [true, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
    }
    toggleAccordion(tab) {
        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);
        this.setState({
            accordion: state,
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
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
									<Sticky enabled={!this.state.active} top='.app-header' innerZ="12" activeClass="sticky-active-class">
									<ProfilePageTitle heading="My Profile" subheading="Alina Mcloughlin" icon="" pagenamechk="profile"  />
									</Sticky>
									
									<div className="app-inner-layout__wrapper row-fluid no-gutters">
										<Card className="app-inner-layout__sidebar bg-transparent">
											<Sticky enabled={!this.state.active} top={180} innerZ="15">
												<div className="p-3">
													<div className="dropdown-menu p-0 dropdown-menu-inline dropdown-menu-rounded dropdown-menu-hover-primary">
														<DropdownItem header className="pt-0">
															Fixed Menu
														</DropdownItem>
														<Button color="primary"
															className={classnames("mb-1 dropdown-item", { active: this.state.activeTab === '1' })}
															onClick={() => {
																this.toggle('1');
															}}>
															Tab Example 1
														</Button>
														<Button color="primary"
															className={classnames("mb-1 dropdown-item", { active: this.state.activeTab === '2' })}
															onClick={() => {
																this.toggle('2');
															}}>
															Tab Example 2
														</Button>
														<Button color="primary"
															className={classnames("mb-1 dropdown-item", { active: this.state.activeTab === '3' })}
															onClick={() => {
																this.toggle('3');
															}}>
															Tab Example 3
														</Button>
													</div>
												</div>
											</Sticky>
										</Card>
										<Card className="col-md-12 app-inner-layout__content">
											<div className="pb-5 pl-5 pr-5 pt-3">
												<div className="mobile-app-menu-btn mb-3">
													<Elastic width={26} lineHeight={2} lineSpacing={5} color='#6c757d' active={this.state.active}
														onClick={() => this.setState({ active: !this.state.active })} />
												</div>
												<TabContent activeTab={this.state.activeTab}>
													<TabPane tabId="1">
														 
														 <h4>Maecenas tempus, first </h4>
													</TabPane>
													<TabPane tabId="2">
														<h4>Maecenas tempus, tellus</h4>
														<div className="divider" />
			
														<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great
															explorer of the truth, the master-builder of human happiness.</p>
			
														<p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
			
														<p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
															pleasure.</p>
			
														<p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
			
														<p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
			
														<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
			
														<div className="mt-5" />
														<div className="clearfix">
															<div className="text-center">
																<Button color="primary" size="lg"
																	className="btn-pill btn-wide btn-shadow" onClick={() => {
																		this.toggle('3');
																	}}>
																	Next: <b>Maecenas tempus, tellus</b>
																</Button>
															</div>
														</div>
													</TabPane>
													<TabPane tabId="3">
														<h4>Maecenas tempus, tellus</h4>
														<div className="divider" />
														<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
			
														<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
			
														<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
			
														<p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
			
														<p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
			
														<p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
			
														<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
			
														<p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
														nibh.
															Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
			
														<div className="mt-5" />
														<div className="clearfix">
															<div className="text-center">
																<Button color="primary" size="lg"
																	className="btn-pill btn-wide btn-shadow" onClick={() => {
																		this.toggle('1'); }}>
																	Next: <b>Maecenas tempus, tellus</b>
																</Button>
															</div>
														</div>
													</TabPane>
												</TabContent>
											</div>
										</Card>
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
export default withRouter(connect(mapStateToProp)(Profile));