import React  from 'react';
import { Link } from "react-router-dom";
import DropdownGridMenus  from './bottomdropdown';
// import './index.scss';
//import { Accordion,Card,Tab ,Dropdown} from 'react-bootstrap';
//import Tabs, { TabPane } from "rc-tabs";
//import TabContent from "rc-tabs/lib/SwipeableTabContent";
//import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
//import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faUsers, faFileAlt, faHandshake, faBullseye, faGavel, faFolderOpen, faHistory, faCog  } from '@fortawesome/free-solid-svg-icons';
//import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
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
              <span className="roomft-titlename">Room belonging to </span> 
              <span>
              <DropdownGridMenus />
               
            </span>
          </div>
      </div>
        );
     }
}

export default Roomsfooter;