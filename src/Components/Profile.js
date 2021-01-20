import React, { Component, Fragment } from 'react';
//import { Link } from "react-router-dom";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"; 
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import ProfilePageTitle from "../Layout/AppMain/ProfilePageTitle";
import Footer from "./Footer";
import ProfileForgotPasswordModal from "./ProfileForgotPasswordModal";
import { Elastic } from 'react-burgers'
import {
    TabContent, TabPane, 
    Form, FormGroup, Label, Input, 
    Card, Col, Row,  Button
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
            custom: [true, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
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
								<CSSTransitionGroup className={cx("app-inner-layout chat-layout", { 'open-mobile-menu': this.state.active, })}
                    component="div" transitionName="TabsAnimation" transitionAppear={true}
                    transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                    <div>
									<ProfilePageTitle heading="My Profile" subheading="Alina Mcloughlin" icon="" pagenamechk="profile"  />
									
									<div className="app-inner-layout__wrapper row-fluid no-gutters my-profile-page">
										<Card className="app-inner-layout__sidebar bg-transparent">
											 
												<div className="p-3">
													<div className="dropdown-menu p-0 dropdown-menu-inline dropdown-menu-rounded dropdown-menu-hover-primary">
														<Button color=""
															className={classnames("mb-1 dropdown-item", { active: this.state.activeTab === '1' })}
															onClick={() => {
																this.toggle('1');
															}}>
															Registration Info
														</Button>
														<Button color=""
															className={classnames("mb-1 dropdown-item", { active: this.state.activeTab === '2' })}
															onClick={() => {
																this.toggle('2');
															}}>
															Change Password
														</Button>
														<Button color=""
															className={classnames("mb-1 dropdown-item", { active: this.state.activeTab === '3' })}
															onClick={() => {
																this.toggle('3');
															}}>
															Close
														</Button>
													</div>
												</div>
											 
										</Card>
										<Card className="col-md-12 app-inner-layout__content">
											<div className="pb-5 pl-5 pr-5 pt-3">
												<div className="mobile-app-menu-btn mb-3">
													<Elastic width={26} lineHeight={2} lineSpacing={5} color='#6c757d' active={this.state.active}
														onClick={() => this.setState({ active: !this.state.active })} />
												</div>
												<TabContent activeTab={this.state.activeTab}>
													<TabPane tabId="1">														 
														 <h4 className="t-title">Registration Info</h4>
														 <p>Keeping your profile updated ensures the full use of the platform</p>
														 <Form>
														  <Row form>
															<Col md={3}>
															  <FormGroup>
																<Label for="fist_name" className="cntrl-lbl">First Name</Label>
																<Input type="text" name="fist_name" id="fist_name" className="txt_bg" placeholder="Alina"/>
															  </FormGroup>
															</Col>
															<Col md={9}>
															  <FormGroup>
																<Label for="last_name" className="cntrl-lbl">Last Name</Label>
																<Input type="text" name="last_name" id="last_name" className="txt_bg" placeholder="Mcloughlin"/>
															  </FormGroup>
															</Col>
														  </Row>
														  <FormGroup>
															<Label for="email" className="cntrl-lbl">Email</Label>
															<Input type="text" name="email" id="email" className="txt_bg" readonly="readonly" placeholder="1234 Main St"/>
														  </FormGroup>
														  <FormGroup>
															<Label for="username" className="cntrl-lbl">Username</Label>
															<Input type="text" name="username" id="username" className="txt_bg" readonly="readonly" placeholder="alina-mcloughlin"/>
														  </FormGroup>
														  <Button color="primary" className="mt-2">
															Save
														  </Button>
														</Form>
													</TabPane>
													<TabPane tabId="2">
														<h4 className="t-title">Change Password</h4>
														<Form>														  
														  <FormGroup>
															<Input type="password" name="current_password" id="current_password" className="txt_bg" placeholder="Enter current password"/>
														  </FormGroup>
														  <FormGroup>
															<Label for="new_password" className="cntrl-lbl">New Password</Label>
															<Input type="password" name="new_password" id="new_password" className="txt_bg" placeholder="Create new password"/>
														  </FormGroup>
														  <FormGroup>
															<Label for="confirm_password" className="cntrl-lbl">Confirm new password</Label>
															<Input type="password" name="confirm_password" id="confirm_password" className="txt_bg" placeholder="Confirm new password"/>
														  </FormGroup>
														  <Button color="primary" className="mt-2">
															Change Password
														  </Button>
														</Form> 
														<p className="mt-20 reset-lnk fw-600">Can't remember your current password? <ProfileForgotPasswordModal /></p>
													</TabPane>
													<TabPane tabId="3">
														
													</TabPane>
												</TabContent>
											</div>
										</Card>
									</div>
									
									</div>
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
export default withRouter(connect(mapStateToProp)(Profile));