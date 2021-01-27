import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {withNamespaces } from 'react-i18next';
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

export class DropdownGridMenus extends React.Component {
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
    const { t } = this.props; 
    return (
      <Fragment>
                    <UncontrolledButtonDropdown >
                      <DropdownToggle caret color="info" className="mb-2 mr-2">
                      {t('ng1_ft_dropdown_btn')}
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-xl">
                        <div className="dropdown-menu-header">
                          <div className="dropdown-menu-header-inner bg-info">
                            <div
                              className="menu-header-image"
                              style={{
                                backgroundImage: "url(" + bg14 + ")",
                              }}>
                            </div>
                            <div className="menu-header-content">
                              <h5 className="menu-header-title">{t('ng1_ft_dropdown_Heading')}</h5>
                            </div>
                          </div>
                        </div>
                        <Nav vertical>
                          <Nav vertical>
                            <NavItem className="nav-item-header">
                            {t('ng1_ft_dropdown_in_Heading1')}
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-chat"> </i>
                                <span> {t('ng1_ft_dropdown_h1_menu1')}</span>
                                <div className="ml-auto badge badge-pill badge-info">
                                  8
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-wallet"> </i>
                                <span>{t('ng1_ft_dropdown_h1_menu2')}</span>
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item-header">
                            {t('ng1_ft_dropdown_in_Heading2')}
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-config"> </i>
                                <span> {t('ng1_ft_dropdown_h2_menu1')}</span>
                                <div className="ml-auto badge badge-success">
                                  New
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-coffee"> </i>
                                <span>{t('ng1_ft_dropdown_h2_menu2')}</span>
                                <div className="ml-auto badge badge-warning">
                                  512
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-box2"> </i>
                                <span>{t('ng1_ft_dropdown_h2_menu3')}</span>
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn text-right">
                              <Button size="sm" className="btn-pill" color="success">
                              {t('ng1_ft_dropdown_in_btntext')}
                              </Button>
                            </NavItem>
                          </Nav>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
      </Fragment>
    );
  }
}

export default withNamespaces()(DropdownGridMenus) ;