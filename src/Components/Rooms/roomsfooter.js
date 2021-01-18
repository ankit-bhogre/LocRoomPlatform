import React  from 'react';
// import './index.scss';
import { Accordion,Card,Tab ,Dropdown} from 'react-bootstrap';
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faFileAlt, faHandshake, faBullseye, faGavel, faFolderOpen, faHistory, faCog  } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
  } from "reactstrap";
class Roomsfooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

render() {
    return (
        <div className="roomfooter-div">
          <div className="roomft-content">
              <span className="roomft-titlename">Room belonging to </span> <span className="roomft-name">Cleria Jonh Smith</span>
              <span>
                <UncontrolledDropdown className="d-inline-block" direction="up" > 
                    <DropdownToggle caret className="roomft_btn" color=""></DropdownToggle>
                       <DropdownMenu className="dropdown-menu-lg title-dropdown">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner">
                                    <div className="menu-header-image" />
                                        <div className="menu-header-content">
                                        <h5 className="menu-header-title">Example</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-menu grid-menu-2col">
                                 <a class="dropdown-item roomft_innerheading" href="#">ACTIVITY</a>
                                 <a class="dropdown-item" href="#"><i className="pe-7s-chat roomft_bottomicons"></i><span className="roomft_bottomtext">Chat</span></a>
                                 <a class="dropdown-item" href="#"><i className="pe-7s-coffee roomft_bottomicons"></i><span className="roomft_bottomtext">Messages</span></a>
                                 <a class="dropdown-item" href="#"><i className="pe-7s-video roomft_bottomicons"></i><span className="roomft_bottomtext">Videocall</span></a>
                                 <a class="dropdown-item" href="#"><i className="pe-7s-key roomft_bottomicons"></i><span className="roomft_bottomtext">Owner</span></a>
                                <a class="dropdown-item" href="#"><i className="pe-7s-door-lock roomft_bottomicons"></i><span className="roomft_bottomtext">Room Info</span></a>
                            </div> 
                        </DropdownMenu>
                </UncontrolledDropdown>
            </span>
          </div>
      </div>
        );
     }
}

export default Roomsfooter;