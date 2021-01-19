import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";

class ForgotPasswordModal extends React.Component {
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
    return (
      <Fragment>
        <Link to="/" className="btn-lg btn btn-link lp_forgotps_link" onClick={this.toggle}>
		  Forgot your password?
		</Link>{" "}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="reg-modal forgot-pass">
          <ModalHeader toggle={this.toggle} className="pt-20">Forgot your password?</ModalHeader>
          <ModalBody>
             <Form>
			  <FormGroup><div className="fgt-title">Fill in with your email and we will sent a link to redefine your password.</div></FormGroup>	
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

export default ForgotPasswordModal;
