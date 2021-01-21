import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import { Row, Col } from "reactstrap";
import bg14 from "../../assets/utils/images/dropdown-header/city4.jpg";

export default class DropdownGridMenus extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Fragment>
		<UncontrolledButtonDropdown >
		  <DropdownToggle caret color="info" className="mt-2 mr-2">
			Alina Mcloughlin
		  </DropdownToggle>
		  <DropdownMenu className="dropdown-menu">
			<div className="dropdown-menu-header">
			  <div className="dropdown-menu-header-inner bg-info">
				<div
				  className="menu-header-image"
				  style={{
					backgroundImage: "url(" + bg14 + ")",
				  }}>
				</div>
				<div className="menu-header-content">
				  <h5 className="menu-header-title">TALK WITH US</h5>
				</div>
			  </div>
			</div>
			<Nav vertical>
				<NavItem className="nav-item-header">
				  Activity
				</NavItem>
				<NavItem>
				  <NavLink href="#">
					<i className="nav-link-icon pe-7s-chat"> </i>
					<span>Chat</span>
				  </NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="#">
					<i className="nav-link-icon pe-7s-coffee"> </i>
					<span>Messages</span>
				  </NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="#">
					<i className="nav-link-icon pe-7s-video"> </i>
					<span>Videocall</span>
				  </NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="#">
					<i className="nav-link-icon pe-7s-key"> </i>
					<span>Owner</span>
				  </NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="#">
					<i className="nav-link-icon pe-7s-door-lock"> </i>
					<span>Room Info</span>
				  </NavLink>
				</NavItem>
			  </Nav>
		  </DropdownMenu>
		</UncontrolledButtonDropdown>
      </Fragment>
    );
  }
}
