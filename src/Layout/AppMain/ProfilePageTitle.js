import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
//import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
//import {  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,  Button,} from "reactstrap";
//import negoroom from "../../assets/custom_images/page-title-img-room.png";
import cx from "classnames";
class ProfilePageTitle extends Component {

  render() {
    let {
		enablePageTitleIcon,
		enablePageTitleSubheading,
		heading,
		icon,
		subheading,
    } = this.props; 
    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
           	 <div className={cx("page-title-icon", {
                "d-none": !enablePageTitleIcon,
              })}><i className={icon} /></div>
            
            <div>
              {heading}
              <div className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}>
                {subheading}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageTitle);