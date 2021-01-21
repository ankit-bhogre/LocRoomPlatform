import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
class TopNavbar extends React.Component {
  render() {
	const { t } = this.props;
    return (
      <Fragment>
        <div className="top_custom_nav">
		  <nav className="navbar navbar-expand-lg navbar-dark w-100">
		  <div className="container-fluid">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse tp_nav" id="navbarNav">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item active">
					<Link className="nav-link" to="#">{t('lbl_top_nav_platform')}</Link>
				  </li>
				  <li className="nav-item">
					<Link className="nav-link" to="#">{t('lbl_top_nav_plans')}</Link>
				  </li>
				  <li className="nav-item">
					<Link className="nav-link" to="#">{t('lbl_top_nav_support')}</Link>
				  </li>
				</ul>
			  </div></div>
			</nav>				
		  </div>
      </Fragment>
    );
  }
}
export default withNamespaces()(TopNavbar);