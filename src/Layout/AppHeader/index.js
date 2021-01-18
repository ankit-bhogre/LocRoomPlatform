import React, { Fragment } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import HeaderLogo from "../AppLogo";

//import SearchBox from "./Components/SearchBox";
//import MegaMenu from "./Components/MegaMenu";
import UserBox from "./Components/UserBox";
import HeaderRightDrawer from "./Components/HeaderRightDrawer";
import HeaderDots from "./Components/HeaderDots";

class Header extends React.Component {
  render(){
    let{
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>	  	
        <CSSTransitionGroup component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation" transitionAppear={true} transitionAppearTimeout={1500}
          transitionEnter={false} transitionLeave={false}>
		  <div className="top_main_header">
          <HeaderLogo />
          <div className={cx("app-header__content", {
              "header-mobile-open": enableMobileMenuSmall,
            })}>
            <div className="app-header-right">
              <HeaderDots />
              <UserBox />
              <HeaderRightDrawer />
            </div>
          </div>
		  </div>
		   <div className="top_custom_nav">
			  <nav className="navbar navbar-expand-lg navbar-dark w-100">
			  <div className="container-fluid">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse tp_nav" id="navbarNav">
					<ul className="navbar-nav ml-auto">
					  <li className="nav-item active">
						<Link className="nav-link" to="#">The Platform</Link>
					  </li>
					  <li className="nav-item">
						<Link className="nav-link" to="#">Plan</Link>
					  </li>
					  <li className="nav-item">
						<Link className="nav-link" to="#">Support</Link>
					  </li>
					</ul>
				  </div></div>
				</nav>				
			  </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
