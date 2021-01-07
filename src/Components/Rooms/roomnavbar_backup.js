import React  from 'react';
// import './index.scss';
import { Accordion,Card,Tab } from 'react-bootstrap';
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
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

//   toggleSidebar = (event) => {
//       console.log('key event',event.currentTarget.parentNode.id);
//     let key = `${event.currentTarget.parentNode.id}Open`;
//     this.setState({ [key]: !this.state[key] });
//   }

 clickMe(event, someParameter){
    console.log('key event -----',event.target.value,someParameter);
    //do with event
    if(someParameter == "left"){
      let key = `${someParameter}Open`;
  this.setState({ [key]: !this.state[key] });
  console.log('key event ****',this.state[key]);
  if(this.state[key]){ this.setState({ imgsrc: PolygonOpen });}else if(!this.state[key]){ this.setState({ imgsrc: PolygonClose });}
    }else if(someParameter == "right"){
      let key = `${someParameter}Open`;
      this.setState({ [key]: !this.state[key] });
      console.log('key event ****',this.state[key]);
      if(this.state[key]){ this.setState({ rightimgsrc: PolygonrightClose });}else if(!this.state[key]){ this.setState({ rightimgsrc: PolygonrightOpen });}
    }
}
  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
   
    // className={completed ? 'text-strike' : null}
    // import PolygonrightClose from "../../assets/custom_images/Polygon_right_close.png";
// import PolygonrightOpen from "../../assets/custom_images/Polygon_right_open.png";
    return (
      <div id='layout'>

          <div id='left' className={leftOpen} >
              {/* <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div> */}
              <div className={`sidebar ${leftOpen}`} >
                  {/* <div className='header'>
                    <h3 className='title'>
                      Left header
                    </h3>
                  </div> */}
                  <div className='content left-content'>
                      {/* <h3>Left content</h3>
                      <p>
                        Aenean ut felis finibus, aliquet mi a, feugiat felis. 
                      </p> */}
                      <ul>
                        <li><a>
                          {/* <span><img src={require('./logo.jpeg')} ></img></span> */}
                          Participants</a></li>
                        <li>
                        <Accordion defaultActiveKey="0">
                          <Card className="left_side_card">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="left_side">
                            <span></span>Proposals
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className="leftside_dropdownbody">
                              <ul className="side_dropdown">
                                <li><a>Proposal 1</a></li>
                                <li><a>Proposal 2</a></li>
                                </ul>  
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                          {/* <Accordion defaultActiveKey="0"> */}
                            {/* <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click me!
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <ul>
                                <li><a>test 1</a></li>
                                <li><a>test 2</a></li>
                                <li><a>test 3</a></li>
                                </ul>  
                                  </Card.Body>
                              </Accordion.Collapse>
                            </Card> */}
                           
                            {/* <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click me!
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                              </Accordion.Collapse>
                            </Card> */}
                          {/* </Accordion> */}
                          </li>
                        </ul>
                  </div>
                  <div className="sidebar_closebtn" >
                      <a onClick={(e) => {this.clickMe(e, 'left')}}><img src={this.state.imgsrc}></img></a>
                    </div>
              </div>
              
          </div>

          <div id='main'>
              {/* <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
                      Main header
                  </h3>
              </div> */}
              {/* className='content' */}
              <div  className={`maincon ${leftOpen} ${rightOpen}`}>
                
              <div className="app-main__inner">
                                              
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
                  {/* <h3>Main content</h3><br/>
                  <p>
                    Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                  </p>
                  <br/>
                  <p>
                    Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                  </p><br/>
                  <p>
                    Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                  </p> */}
              </div>
          </div>

          <div id='right' className={rightOpen} >
              {/* <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
               */}
              <div className={`sidebar ${rightOpen}`} >
                  {/* <div className='header'>
                    <h3 className='title'>
                      Right header
                    </h3>
                  </div> */}
                    <div className="sidebar_closebtn d-flex" >
                      <a onClick={(e) => {this.clickMe(e, 'right')}}><img src={this.state.rightimgsrc}></img><span className="sidebar_tooltext"></span></a>
                      <div className="sidebar_closebtninner">Tools</div>                           
                     </div> 
                  {/* <div className="sidebar_closebtn" > <a onClick={(e) => {this.clickMe(e, 'right')}}>Click Me++!</a></div> */}
                  <div className='content'>
                      {/* <h3>Right content</h3><br/>
                      <p>
                        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. 
                      </p> */}
                  </div>
                  
              </div>

          </div>

      </div>
    );
  }
}

export default Roomnavbar;



// export const MainNav = [
//     {
//       icon: "pe-7s-home",
//       label: "Home",
//       to: "/home"
//     },
//     {
//       icon: "pe-7s-door-lock frst_mlnk",
//       label: "Rooms",
//       content: [
//         {
//           label: "Negotiation Rooms",
//           content: [
//             {
//               label: "Negotiation 1",
//               to: "/negotiation1",
//             },
//             {
//               label: "Negotiation 2",
//               to: "/negotiation2",
//             }
//           ],
//         },
//         {
//           label: "Project Rooms",
//           content: [
//             {
//               label: "Project 1",
//               to: "/",
//             },
//             {
//               label: "Project 2",
//               to: "/",
//             }
//           ],
//         },{
//           label: "Event Rooms",
//           content: [
//             {
//               label: "Event 1",
//               to: "/",
//             },
//             {
//               label: "Event 2",
//               to: "/",
//             }
//           ],
//         },
//       ],
//     },
//     {
//       icon: "pe-7s-video",
//       label: "Video Conference",
//       content: [
//         {
//           label: "Contract 1",
//           to: "/dashboard",
//         },
//         {
//           label: "Contract 2",
//           to: "/",
//         },
//       ],
//     },
//   ];
  
