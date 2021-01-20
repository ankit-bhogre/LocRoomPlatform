import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";

import { withNamespaces } from 'react-i18next';
class ProfileForgotPasswordModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
	//const { t } = this.props;
    return (
      <Fragment>
        <Link onClick={this.toggle}>
		  Reset via e-mail
		</Link>{" "}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="reg-modal forgot-pass">
          <ModalHeader toggle={this.toggle} className="pt-20">Forgot your password?</ModalHeader>
          <ModalBody>
             <Form>
			  <FormGroup><div className="fgt-title">Fill in with your email and we will send a link to redefine your password.</div></FormGroup>	
			  <FormGroup>
				<Label for="email" className="cntrl-lbl">Email Address</Label>
				<Input type="text" name="email" id="email" className="txt_bg" placeholder="mary@xpto.com"/>
			  </FormGroup>			  
			  <div className="sub_btn"><Button color="primary" className="mt-2">Reset password</Button></div>
			  <p>&nbsp;</p>
			</Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}
export default withNamespaces()(ProfileForgotPasswordModal);