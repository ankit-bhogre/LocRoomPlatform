import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem, Nav, NavLink,NavItem,Popover } from "reactstrap";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
import negoroom from "../../assets/custom_images/page-title-img-room.png";
import {withNamespaces } from 'react-i18next';
import bg4 from "../../assets/utils/images/dropdown-header/city5.jpg";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome,faStar, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

class PageTitle extends Component {

	constructor(props) {
		super(props);
	
		// this.toggle = this.toggle.bind(this);
		this.toggle2 = this.toggle2.bind(this);
	
		this.state = {
		//   popoverOpen: false,
		  popoverOpen2: false,
		};
		
	  }

	  toggle2() {
		this.setState({
		  popoverOpen2: !this.state.popoverOpen2,
		});
	  }

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
    const { t } = this.props; 
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
				{t('ng1_pgtitle_navigation1')}
				</Link>
			  </BreadcrumbItem>
			  <BreadcrumbItem>
				<Link to="#" onClick={(e) => e.preventDefault()}>
				{t('ng1_pgtitle_navigation2')}
				</Link>
			  </BreadcrumbItem>
			  <BreadcrumbItem active>{t('ng1_pgtitle_navigation3')}</BreadcrumbItem>
			</Breadcrumb>
			
			<Button className="btn-shadow mr-3 PageTitleBtn" onClick="" color="" >
			  <i className="pe-7s-plus"></i> {t('ng1_pgtitle_btn1')}
			</Button>	

			{/* --------------------------------------------------------------------- */}

     <Nav className="header-megamenu nav1_title_dropdown">
          <NavItem>

            <NavLink href="#" onClick={this.toggle2} id="PopoverGridFooter" >
			<DropdownToggle caret className="PageTitleBtn" color=""><i className="pe-7s-info"></i> {t('ng1_pgtitle_btn2')}</DropdownToggle>
              {/* Grid Menu
              <div className="badge badge-dark ml-0 ml-1">
                <small>NEW</small>
              </div>
			  <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleUp} />
			   */}
            </NavLink>
          </NavItem>
          <Popover className="rm-max-width popover-custom" fade={false} hideArrow trigger="legacy"
            placement="top-start" isOpen={this.state.popoverOpen2} target="PopoverGridFooter" toggle={this.toggle2}>
            <div className="dropdown-menu-header">
              <div className="dropdown-menu-header-inner bg-tempting-azure">
                <div className="menu-header-image opacity-1"
                  style={{
                    backgroundImage: "url(" + bg4 + ")",
                  }}/>
                <div className="menu-header-content text-dark">
                  <h5 className="menu-header-title"> {t('ng1_pgtitle_bt2_heading')}</h5>
                  {/* <h6 className="menu-header-subtitle">
                  testing
                  </h6> */}
                </div>
              </div>
            </div>
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="dark">
                    <i className="pe-7s-copy-file text-dark opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    {t('ng1_pgtitle_bt2_sec1')}
                  </Button>
                </Col>
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="danger">
                    <i className="pe-7s-box1 text-danger opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    {t('ng1_pgtitle_bt2_sec2')}
                  </Button>
                </Col>
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="success">
                    <i className="pe-7s-graph text-success opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    {t('ng1_pgtitle_bt2_sec3')}
                  </Button>
                </Col>
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="focus">
                    <i className="pe-7s-settings text-focus opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    {t('ng1_pgtitle_bt2_sec4')}
                  </Button>
                </Col>
              </Row>
            </div>
          </Popover>
        </Nav>
			{/* --------------------------------------------------------------------- */}

{/* 						 
			<UncontrolledDropdown className="d-inline-block" direction="down" > 
			  <DropdownToggle caret className="PageTitleBtn" color=""><i className="pe-7s-info"></i> {t('ng1_pgtitle_btn2')}</DropdownToggle>
			  <DropdownMenu className="dropdown-menu-lg title-dropdown">
					<div className="dropdown-menu-header">
					  <div className="dropdown-menu-header-inner bg-dark">
						<div className="menu-header-image" />
						<div className="menu-header-content">
						  <h5 className="menu-header-title"> {t('ng1_pgtitle_bt2_heading')}</h5>
						</div>
					  </div>
					</div>
					<div className="grid-menu grid-menu-2col">
					  <Row className="no-gutters">
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-copy-file btn-icon-wrapper"></i>  {t('ng1_pgtitle_bt2_sec1')}</Button>
						</Col>
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-box1 btn-icon-wrapper"></i> {t('ng1_pgtitle_bt2_sec2')}</Button>
						</Col>
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-graph btn-icon-wrapper"></i> {t('ng1_pgtitle_bt2_sec3')}</Button>
						</Col>
						<Col sm="6">
						  <Button className="btn-icon-vertical btn-transition" outline color=""><i className="pe-7s-settings btn-icon-wrapper"></i> {t('ng1_pgtitle_bt2_sec4')}</Button>
						</Col>
					  </Row>
					</div> 
				  </DropdownMenu>
			</UncontrolledDropdown>				 */}
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

// export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
export default connect(mapDispatchToProps)(withNamespaces()(PageTitle));