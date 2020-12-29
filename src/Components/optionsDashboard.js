import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
//import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import cx from "classnames";

import ResizeDetector from "react-resize-detector";
//import AppMain from "../Layout/AppMain";
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import PageTitle from "../Layout/AppMain/PageTitle";
import Footer from "./Footer"; 

 
//import { Route, Switch, Redirect } from 'react-router-dom';  
 class Optionsdashboard extends Component {  
   constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: false,
    };
  }
  render() { 
	 
         return (
			<Fragment>
            <div className="od_body">
                <Row>
                    <Col className="col-3">10101</Col>
                    <Col className="col-9">20202</Col>
                </Row>
            </div>
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
export default withRouter(connect(mapStateToProp)(Optionsdashboard));
