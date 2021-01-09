import React  from 'react';
// import './index.scss';
import { Accordion,Card,Tab } from 'react-bootstrap';
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import Roomsfooter from "./roomsfooter"
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faFileAlt, faHandshake, faBullseye, faGavel, faFolderOpen, faHistory, faCog  } from '@fortawesome/free-solid-svg-icons';


import PolygonClose from "../../assets/custom_images/Polygon_close.png";
import PolygonOpen from "../../assets/custom_images/Polygon_open.png";
import PolygonrightClose from "../../assets/custom_images/Polygon_right_close.png";
import PolygonrightOpen from "../../assets/custom_images/Polygon_right_open.png";

// image for tabs
import timeline_img from "../../assets/custom_images/nego_timeline.png";
import details_img from "../../assets/custom_images/nego_details.png";
import proposal_img from "../../assets/custom_images/nego_proposal.png";
import meeting_img from "../../assets/custom_images/nego_meeting.png";
import attachment_img from "../../assets/custom_images/nego_attachment.png";
import general_img from "../../assets/custom_images/nego_general.png";
class Roomnavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
      imgsrc:PolygonClose,
      rightimgsrc:PolygonrightOpen
    }
  }

  clickMe(event, someParameter){
    // if(someParameter == "left"){
    this.setState(prevState => ({
      leftOpen: false
    }));

    console.log('key event **** 99',this.state.leftOpen);
  // }
    // let key = `${someParameter}Open`;
    // console.log('someParameter',key);

    // this.setState({ [key]: !this.state[key] });

    
    if( this.state.leftOpen == true && this.state.rightOpen == true ){  console.log('key 2222');}
    // else if( this.state.leftOpen == true && this.state.rightOpen == false ){  console.log('key 2222');}
    // else if( this.state.leftOpen == false && this.state.rightOpen == true ){  console.log('key 2222');}
    // else if( this.state.leftOpen == false && this.state.rightOpen == false ){  console.log('key 2222');}
    // if(someParameter == "right"){
    // document.getElementById("sidebar2").style.marginLeft = "-2%";
    // document.getElementById("sidebar2").style.width = "2%";
    // document.getElementById("sidebarnewrightId").style.display = "none";
    // document.getElementById("mainContents").style.width = "97%";
    // }else if(someParameter == "left"){
    //   document.getElementById("sidebar").style.marginLeft = "-15%";
    //   document.getElementById("mainContents").style.width = "85%";
    // }
    
  }

  selectMe(){ 
    this.setState({ leftOpen: !this.state.leftOpen })
    if( this.state.leftOpen == true && this.state.rightOpen == true ){ 
        document.getElementById("sidebar").style.marginLeft = "-15%";
        document.getElementById("mainContents").style.width = "90%";
        document.getElementById("sidebar").style.transitionDuration = "0.3s";
        this.setState({ imgsrc: PolygonOpen });
        console.log('key 2222a');
      }
    else if( this.state.leftOpen == true && this.state.rightOpen == false ){ 
      document.getElementById("sidebar").style.marginLeft = "-15%";
      document.getElementById("mainContents").style.width = "94%";
      document.getElementById("sidebar").style.transitionDuration = "0.3s";
      this.setState({ imgsrc: PolygonOpen });
       console.log('key 2222b');
      }
    else if( this.state.leftOpen == false && this.state.rightOpen == true ){  
      document.getElementById("sidebar").style.transitionDuration = "0s";
      document.getElementById("sidebar").style.marginLeft = "0";
      document.getElementById("mainContents").style.width = "72%";
      this.setState({ imgsrc: PolygonClose });
      console.log('key 2222c');
    }
    else if( this.state.leftOpen == false && this.state.rightOpen == false ){ 
      document.getElementById("sidebar").style.transitionDuration = "0s";
        document.getElementById("sidebar").style.marginLeft = "0";
        document.getElementById("mainContents").style.width = "76%";
        this.setState({ imgsrc: PolygonClose });
       console.log('key 2222d');}
  }

  selectMe1(){ 
    this.setState({ rightOpen: !this.state.rightOpen })
    if( this.state.leftOpen == true && this.state.rightOpen == true ){ 
      document.getElementById("sidebar2").style.width = "3%";
      document.getElementById("sidebarnewrightId").style.display = "none";
      document.getElementById("mainContents").style.width = "76%";
      document.getElementById("sidebar2").style.transitionDuration = "0.3s";
      this.setState({ rightimgsrc: PolygonrightClose });
       console.log('key 22221');
      }
    else if( this.state.leftOpen == true && this.state.rightOpen == false ){ 
      document.getElementById("sidebar2").style.width = "7%";
      document.getElementById("sidebarnewrightId").style.display = "inline-block";
      document.getElementById("mainContents").style.width = "72%";
      document.getElementById("sidebar2").style.transitionDuration = "0s";
      this.setState({ rightimgsrc: PolygonrightOpen });
       console.log('key 2222');
      }
    else if( this.state.leftOpen == false && this.state.rightOpen == true ){  
      document.getElementById("sidebar2").style.width = "3%";
      document.getElementById("sidebarnewrightId").style.display = "none";
      document.getElementById("mainContents").style.width = "94%";
      document.getElementById("sidebar2").style.transitionDuration = "0.3s";
      this.setState({ rightimgsrc: PolygonrightClose });
      console.log('key 2223');
    }
    else if( this.state.leftOpen == false && this.state.rightOpen == false ){ 
      document.getElementById("sidebar2").style.width = "7%";
      document.getElementById("mainContents").style.width = "90%";
      document.getElementById("sidebarnewrightId").style.display = "inline-block";
      document.getElementById("sidebar2").style.transitionDuration = "0s";
      this.setState({ rightimgsrc: PolygonrightOpen });
       console.log('key 22224');
      }
}

  render() {
    return (
  <div className="testing1">
    <div id="contents">
      <div id="sidebar" className="room-left-sidebar">
        <div className="sidebarnew_inner d-flex">
        <div className="leftsidebar1">
          {/* <a href="link1.php">
          <div>
            55555555
          </div>
        </a> */}
       <ul className="leftside_navbar">
       {/* <img className="leftside_linkimg" src={require('../../assets/custom_images/asidebar_image/user_a.png')} alt="" /> faYoutube*/}
         <li className="leftside_navitem"><a className="leftside_navlink"><FontAwesomeIcon className="lift-icon fause-icon" icon={faUsers} /><span className="lnk-label">Participants </span></a></li>
           {/* dropdown */}
           <li className="leftside_navitem"><a className="leftside_navlink">
           {/* <img className="leftside_linkimg_dropdown" src={require('../../assets/custom_images/asidebar_image/proposal_grey _b.png')} alt="" /> */}
             <span  className="leftside_linkinside"><FontAwesomeIcon className="lift-icon fafile-icon" icon={faFileAlt} /></span>
              <span className="leftside_linktext_dropdown">
              <Accordion defaultActiveKey="0" className="leftside_dropbody">
                          <Card className="leftside_drop_card">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="leftside_drop_inner">
                            <span className="drop-heading">Proposals</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className="leftside_dropdownbody">
                              <ul className="side_dropdown">
                                <li><a className="leftside_dropmenu">Proposal 1</a></li>
                                <li><a className="leftside_dropmenu">Proposal 2</a></li>
                              </ul>  
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                 </Accordion>
              </span> 
              </a></li>
           {/* dropdown close*/}
         <li className="leftside_navitem"><a className="leftside_navlink"><FontAwesomeIcon className="lift-icon fahand-icon" icon={faHandshake} /><span className="lnk-label">Agreement </span>  </a></li>
         <li className="leftside_navitem"><a className="leftside_navlink"><FontAwesomeIcon className="lift-icon fabulleye-icon" icon={faBullseye} /><span className="lnk-label">Strategies </span>  </a></li>
          {/* dropdown */}
          <li className="leftside_navitem"><a className="leftside_navlink">
             <span  className="leftside_linkinside"><FontAwesomeIcon className="lift-icon fagavel-icon" icon={faGavel} /></span>
              <span className="leftside_linktext_dropdown">
              <Accordion defaultActiveKey="0" className="leftside_dropbody">
                          <Card className="leftside_drop_card">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="leftside_drop_inner">
                            <span className="drop-heading">Justice</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className="leftside_dropdownbody">
                              <ul className="side_dropdown">
                                <li><a className="leftside_dropmenu">Send</a></li>
                                <li><a className="leftside_dropmenu">Progress</a></li>
                                <li><a className="leftside_dropmenu">Recapture</a></li>
                              </ul>  
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                 </Accordion>
              </span> 
              </a></li>
           {/* dropdown close*/}
         <li className="leftside_navitem"><a className="leftside_navlink"><FontAwesomeIcon className="lift-icon fafolder-icon" icon={faFolderOpen} /><span className="lnk-label">Shelve </span>  </a></li>
         <li className="leftside_navitem"><a className="leftside_navlink"><FontAwesomeIcon className="lift-icon fahistory-icon" icon={faHistory} /><span className="lnk-label">Historic </span>  </a></li>
         <li className="leftside_navitem"><a className="leftside_navlink"><FontAwesomeIcon className="lift-icon facog-icon" icon={faCog} /><span className="lnk-label">Preferences </span> </a></li>
       </ul>
      </div>
      {/* align-items-center h-100  */}
        <div className="leftsidebar2 d-flex"><a  className="leftsidebar2_img" onClick={() => {this.selectMe()}}><img classname="leftsidebar2_img1" src={this.state.imgsrc}></img></a></div>
        </div>
     </div>
     <div id="mainContents"> 
                  <div className="center-content-div">
                                                    
                      <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab={<span><img className="tab_head_img" src={timeline_img} alt="" /> Timeline</span>} key="1">
                                    Timeline  
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={details_img} alt="" /> Details</span>} key="2">
                                  Details
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={proposal_img} alt="" /> Proposal</span>} key="3">
                                  Proposal
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={meeting_img} alt="" /> Meetings</span>} key="4">
                                  Meetings
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={attachment_img} alt="" /> Attachments</span>} key="5">
                                  Attachments
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={general_img} alt="" /> General</span>} key="6">
                                  General
                                </TabPane>
                        </Tabs>
                  </div>
                  
                     {/* footers  */}
                  <Roomsfooter  /> 
                     {/* footer close  */}
              </div>
      <div id="sidebar2" className="room-right-sidebar">
          <div className="sidebarnewright_inner d-flex">
          {/* align-items-center h-100*/}
          {/* <div className="rightsidebar_new h-100">
            <span className="rightsidebar_center d-flex">
            <a  className="rightsidebar_new_img" onClick={() => {this.selectMe()}}><img classname="rightsidebar_newimg_1" src={this.state.rightimgsrc}></img></a>
            <span className="rightside_text">Tools</span>
            </span>
            </div> */}
            {/* <div className="sidebarnewright2 h-100 d-flex align-items-center">
              <a className="sidebarnewright2_img d-flex" onClick={() => {this.selectMe1()}}><img classname="leftsidebar2_img1" src={this.state.rightimgsrc}></img>
              <div className="sidebar_closebtninner">Tools</div></a>           
              </div> */}
              <div className="sidebarnewright2 ">
              <a className="sidebarnewright2_img d-flex" onClick={() => {this.selectMe1()}}>
              <img classname="leftsidebar2_img1" src={this.state.rightimgsrc}></img>
              <div className="sidebar_closebtninner">Tools</div>
              </a>           
              </div>

            <div className="sidebarnewright1" id="sidebarnewrightId">
              <ul className="right_navbar">
                  <li className="rightside_navitem"><a className="rightside_navlink"><span  className="right_linkinside"><i class="pe-7s-video right_vidicon"> </i></span></a></li>
                  <li className="rightside_navitem"><a className="rightside_navlink"><span  className="right_linkinside"><i class="pe-7s-calculator right_calcicon"> </i></span></a></li>
               </ul>
            </div>
        </div>
      </div>
     
  </div>
  
  </div>
    );
  }
}

export default Roomnavbar;



