import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
import negoroom from "../../assets/custom_images/page-title-img-room.png";

//import { faHome,faStar, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

class PageTitle extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  render() {
    let {
		enablePageTitleIcon,
		enablePageTitleSubheading,
		imgsts,
		heading,
		icon,
		subheading,
    } = this.props;

	if ({imgsts}==='nego-room-one') { 
	}
    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            
				{ this.props.imgsts === 'negoroomone' ?
						<img width={75} className="" src={negoroom} alt=""/>
				   :
				   <div className={cx("page-title-icon", {
                "d-none": !enablePageTitleIcon,
              })}><i className={icon} /></div>
			 }
             
            
            <div>
              {heading}
              <div className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}>
                {subheading}
              </div>
            </div>
          </div>
          <div className="page-title-actions nego_page_title">
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
			<UncontrolledDropdown className="d-inline-block" direction="down" > 
			  <DropdownToggle caret className="PageTitleBtn" color=""><i className="pe-7s-info"></i> Room Info</DropdownToggle>
			  <DropdownMenu className="dropdown-menu-lg title-dropdown">
					<div className="dropdown-menu-header">
					  <div className="dropdown-menu-header-inner bg-dark">
						<div className="menu-header-image" />
						<div className="menu-header-content">
						  <h5 className="menu-header-title">Example</h5>
						</div>
					  </div>
					</div>
					<div className="grid-menu grid-menu-2col">
					  <Row className="no-gutters">
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-copy-file btn-icon-wrapper"></i> Models</Button>
						</Col>
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-box1 btn-icon-wrapper"></i> Memory</Button>
						</Col>
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-graph btn-icon-wrapper"></i> Statistics</Button>
						</Col>
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-settings btn-icon-wrapper"></i> Settings</Button>
						</Col>
					  </Row>
					</div> 
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
