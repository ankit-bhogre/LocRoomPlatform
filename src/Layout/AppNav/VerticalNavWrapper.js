import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import {withNamespaces } from 'react-i18next';
import RouterLink from 'react-metismenu-router-link';
import {
  MainNav,
  //ComponentsNav,
} from "./NavItems";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    const { t } = this.props; 
    return (
      <Fragment>
         {/* LinkComponent={RouterLink}  */}
        {/*<h5 className="app-sidebar__heading"><Link to="/home"><i className="inav pe-7s-home"></i> Home</Link></h5>*/}
        {/* <MetisMenu content={MainNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu"  iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
        <MetisMenu content= {t('MainNav',{ returnObjects: true })} onSelected={this.toggleMobileSidebar} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
export default connect(mapDispatchToProps)(withNamespaces()(Nav)) ;