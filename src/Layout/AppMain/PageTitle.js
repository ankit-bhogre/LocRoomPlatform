import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

import { faHome,faStar, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

class PageTitle extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

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
              })}>
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}>
                {subheading}
              </div>
            </div>
          </div>
          <div className="page-title-actions">
		  	<Breadcrumb className="PageBreadcrumb">
			  <BreadcrumbItem>
				<Link to="/home">
				  Home
				</Link>
			  </BreadcrumbItem>
			  <BreadcrumbItem>
				<Link to="#" onClick={(e) => e.preventDefault()}>
				  Rooms
				</Link>
			  </BreadcrumbItem>
			  <BreadcrumbItem active>Negotiation Room</BreadcrumbItem>
			</Breadcrumb>
			
			<Button className="btn-shadow mr-3 PageTitleBtn" onClick="" color="" >
				  <i className="pe-7s-plus"></i> New Negotiation
				</Button>
				 
				<UncontrolledDropdown className="d-inline-block">
				  <DropdownToggle color="" className="btn-shadow PageTitleBtn" caret>
					 <i className="pe-7s-info"></i> Info
				  </DropdownToggle>
				  <DropdownMenu right>
					<Nav vertical>
					  <NavItem>
						<NavLink href="#">
						  <i className="nav-link-icon lnr-inbox"> </i>
						  <span>Inbox</span>
						  <div className="ml-auto badge badge-pill badge-secondary">
							86
						  </div>
						</NavLink>
					  </NavItem>
					  <NavItem>
						<NavLink href="#">
						  <i className="nav-link-icon lnr-book"> </i>
						  <span>Book</span>
						  <div className="ml-auto badge badge-pill badge-danger">5</div>
						</NavLink>
					  </NavItem>
					  <NavItem>
						<NavLink href="#">
						  <i className="nav-link-icon lnr-picture"> </i>
						  <span>Picture</span>
						</NavLink>
					  </NavItem>
					  <NavItem>
						<NavLink disabled href="#">
						  <i className="nav-link-icon lnr-file-empty"> </i>
						  <span>File Disabled</span>
						</NavLink>
					  </NavItem>
					</Nav>
				  </DropdownMenu>
				</UncontrolledDropdown>
				
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
