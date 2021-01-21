import React  from 'react';
import { Link } from "react-router-dom";
// import './index.scss';
import { Accordion,Card } from 'react-bootstrap';
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import Roomsfooter from "./roomsfooter"
//import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
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
import { withNamespaces } from 'react-i18next';
class Roomnavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
      hideLabel:false,
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

    
    if( this.state.leftOpen === true && this.state.rightOpen === true ){  console.log('key 2222');}
 
    
  }

  selectMe(){ 
    this.setState({ leftOpen: !this.state.leftOpen })
    if( this.state.leftOpen === true && this.state.rightOpen === true ){ 
      this.setState(prevState => ({
        hideLabel: true
      }));
  
        // document.getElementById("sidebar").style.marginLeft = "-15%"; leftside_linktext_dropdown
        // document.getElementById("mainContents").style.width = "90%";
        // document.getElementById("sidebar").style.transitionDuration = "0.3s";

        document.getElementById("sidebar").style.width = "6%";
        document.getElementById("mainContents").style.width = "87%";
        document.getElementById("sidebar2").style.width = "7%";
        document.getElementById("sidebar").style.transitionDuration = "0.3s";

        this.setState({ imgsrc: PolygonOpen });
        console.log('key 2222a');
      }
    else if( this.state.leftOpen === true && this.state.rightOpen === false ){ 
      this.setState(prevState => ({
        hideLabel: true
      }));
      document.getElementById("sidebar").style.width = "6%";
      document.getElementById("mainContents").style.width = "91%";
      document.getElementById("sidebar").style.transitionDuration = "0.3s";
      this.setState({ imgsrc: PolygonOpen });
       console.log('key 2222b');
      }
    else if( this.state.leftOpen === false && this.state.rightOpen === true ){  
      this.setState(prevState => ({
        hideLabel: false
      }));
      // document.getElementById("sidebar").style.transitionDuration = "0s";
      // document.getElementById("sidebar").style.marginLeft = "0";
      // document.getElementById("mainContents").style.width = "72%";

      document.getElementById("sidebar").style.transitionDuration = "0s";
      document.getElementById("sidebar").style.width = "21%";
      document.getElementById("mainContents").style.width = "72%";
      this.setState({ imgsrc: PolygonClose });
      console.log('key 2222c');
    }
    else if( this.state.leftOpen === false && this.state.rightOpen === false ){ 
      this.setState(prevState => ({
        hideLabel: false
      }));
      document.getElementById("sidebar").style.transitionDuration = "0s";
        document.getElementById("sidebar").style.width = "21%";
        document.getElementById("mainContents").style.width = "76%";
        this.setState({ imgsrc: PolygonClose });
       console.log('key 2222d');}
  }

  selectMe1(){ 
    this.setState({ rightOpen: !this.state.rightOpen })
    if( this.state.leftOpen === true && this.state.rightOpen === true ){ 
      document.getElementById("sidebar2").style.width = "3%";
      document.getElementById("sidebarnewrightId").style.display = "none";
      document.getElementById("mainContents").style.width = "76%";
      document.getElementById("sidebar2").style.transitionDuration = "0.3s";
      this.setState({ rightimgsrc: PolygonrightClose });
       console.log('key 22221');
      }
    else if( this.state.leftOpen === true && this.state.rightOpen === false ){ 
      document.getElementById("sidebar2").style.width = "7%";
      document.getElementById("sidebarnewrightId").style.display = "inline-block";
      document.getElementById("mainContents").style.width = "72%";
      document.getElementById("sidebar2").style.transitionDuration = "0s";
      this.setState({ rightimgsrc: PolygonrightOpen });
       console.log('key 2222');
      }
    else if( this.state.leftOpen === false && this.state.rightOpen === true ){  
      document.getElementById("sidebar2").style.width = "3%";
      document.getElementById("sidebarnewrightId").style.display = "none";
      document.getElementById("mainContents").style.width = "91%";
      document.getElementById("sidebar2").style.transitionDuration = "0.3s";
      this.setState({ rightimgsrc: PolygonrightClose });
      console.log('key 2223');
    }
    else if( this.state.leftOpen === false && this.state.rightOpen === false ){ 
      document.getElementById("sidebar2").style.width = "7%";
      document.getElementById("mainContents").style.width = "87%";
      document.getElementById("sidebarnewrightId").style.display = "inline-block";
      document.getElementById("sidebar2").style.transitionDuration = "0s";
      this.setState({ rightimgsrc: PolygonrightOpen });
       console.log('key 22224');
      }
}

  render() {
	const { t } = this.props;  	
    let hideLabel = this.state.hideLabel ? 'hide-label' : 'show-label';
    // let rightOpen = this.state.rightOpen ? 'open' : 'closed';
    return (
  <div className="testing1">
    <div id="contents" className="room_main_wrapper">
      <div id="sidebar" className="room-left-sidebar">
        <div className="sidebarnew_inner">
        <div className="leftsidebar1">
            <Link  className="left_bar_close" onClick={() => {this.selectMe()}}><img classname="leftsidebar2_img1" src={this.state.rightimgsrc} alt=""></img></Link>
            <ul className="leftside_navbar">
           <li className="leftside_navitem">
             <Link className="leftside_navlink">
               <FontAwesomeIcon className="lift-icon fause-icon" icon={faUsers} />
               <span className={`lnk-label ${hideLabel}`}>Participants </span>
               
             </Link>
           </li>
           <li className="leftside_navitem"><Link className="leftside_navlink">
             <span  className="leftside_linkinside"><FontAwesomeIcon className="lift-icon fafile-icon" icon={faFileAlt} /></span>
              <span className={`lnk-label ${hideLabel} leftside_linktext_dropdown` }>
              <Accordion defaultActiveKey="0" className="leftside_dropbody">
                          <Card className="leftside_drop_card">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="leftside_drop_inner">
                            <span className={`drop-heading ${hideLabel}`}>Proposals</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className="leftside_dropdownbody">
                              <ul className="side_dropdown">
                                <li><Link className="leftside_dropmenu">Proposal 1</Link></li>
                                <li><Link className="leftside_dropmenu">Proposal 2</Link></li>
                              </ul>  
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                 </Accordion>
              </span> 
              </Link></li>
         <li className="leftside_navitem"><Link className="leftside_navlink"><FontAwesomeIcon className="lift-icon fahand-icon" icon={faHandshake} /><span className={`lnk-label ${hideLabel}`}>Agreement </span>  </Link></li>
         <li className="leftside_navitem"><Link className="leftside_navlink"><FontAwesomeIcon className="lift-icon fabulleye-icon" icon={faBullseye} /><span className={`lnk-label ${hideLabel}`}>Strategies </span>  </Link></li>
          {/* dropdown */}
          <li className="leftside_navitem"><Link className="leftside_navlink">
             <span  className="leftside_linkinside"><FontAwesomeIcon className="lift-icon fagavel-icon" icon={faGavel} /></span>
              <span className={`lnk-label ${hideLabel} leftside_linktext_dropdown` }>
              <Accordion defaultActiveKey="0" className="leftside_dropbody">
                          <Card className="leftside_drop_card">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="leftside_drop_inner">
                            <span className={`drop-heading ${hideLabel}`}>Justice</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className="leftside_dropdownbody">
                              <ul className="side_dropdown">
                                <li><Link className="leftside_dropmenu">Send</Link></li>
                                <li><Link className="leftside_dropmenu">Progress</Link></li>
                                <li><Link className="leftside_dropmenu">Recapture</Link></li>
                              </ul>  
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                 </Accordion>
              </span> 
              </Link></li>
           {/* dropdown close*/}
         <li className="leftside_navitem"><Link className="leftside_navlink"><FontAwesomeIcon className="lift-icon fafolder-icon" icon={faFolderOpen} /><span className={`lnk-label ${hideLabel}`}>Shelve </span>  </Link></li>
         <li className="leftside_navitem"><Link className="leftside_navlink"><FontAwesomeIcon className="lift-icon fahistory-icon" icon={faHistory} /><span className={`lnk-label ${hideLabel}`}>Historic </span>  </Link></li>
         <li className="leftside_navitem"><Link className="leftside_navlink"><FontAwesomeIcon className="lift-icon facog-icon" icon={faCog} /><span className={`lnk-label ${hideLabel}`}>Preferences </span> </Link></li>
       </ul>
      </div>
      </div>
     </div>
     <div id="mainContents" className="rooms_tab_warp"> 
                  <div className="center-content-div">
                                                    
                      <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab={<span><img className="tab_head_img" src={timeline_img} alt="" /> {t('lbl_room_tab_timeline')}</span>} key="1">
                                    <div className="tab_wrap_area">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.  </div>
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={details_img} alt="" /> {t('lbl_room_tab_details')}</span>} key="2">
                                <div className="tab_wrap_area">Details  </div>
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={proposal_img} alt="" /> {t('lbl_room_tab_proposal')}</span>} key="3">
                                <div className="tab_wrap_area">Proposal  </div>
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={meeting_img} alt="" /> {t('lbl_room_tab_meetings')}</span>} key="4">
                                <div className="tab_wrap_area">Meetings  </div>
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={attachment_img} alt="" /> {t('lbl_room_tab_attachments')}</span>} key="5">
                                <div className="tab_wrap_area">Attachments  </div>
                                </TabPane>
                                <TabPane tab={<span><img className="tab_head_img" src={general_img} alt="" /> {t('lbl_room_tab_general')}</span>} key="6">
                                <div className="tab_wrap_area">General  </div>
                                </TabPane>
                        </Tabs>
                  </div>
                  
                  <Roomsfooter  /> 
              </div>
      <div id="sidebar2" className="room-right-sidebar">
      <Link className="rgt_bar_close" onClick={() => {this.selectMe1()}}><img classname="leftsidebar2_img1" src={this.state.rightimgsrc} alt=""></img> <span className="aside-tooltext">Tools</span></Link>
      <div className="sidebarnewright1" id="sidebarnewrightId">
            
              <ul className="right_navbar">
                  <li className="rightside_navitem"><Link className="rightside_navlink"><span  className="right_linkinside"><i class="pe-7s-video right_vidicon"> </i></span></Link></li>
                  <li className="rightside_navitem"><Link className="rightside_navlink"><span  className="right_linkinside"><i class="pe-7s-calculator right_calcicon"> </i></span></Link></li>
               </ul>
            </div>
      </div>
     
  </div>
  
  </div>
    );
  }
}
export default withNamespaces()(Roomnavbar);