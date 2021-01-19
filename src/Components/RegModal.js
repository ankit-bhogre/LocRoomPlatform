import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";


class RegModal extends React.Component {
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
      <span className="d-inline-block mb-2 mr-2">
        <Link color="text-primary" onClick={this.toggle}>
          Register Now!
        </Link>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="reg-modal">
          <ModalHeader toggle={this.toggle} className="">Registation Info</ModalHeader>
          <ModalBody>
             <Form>
			  <Row form>
				<Col md={4}>
				  <FormGroup>
					<Label for="fist_name" className="cntrl-lbl">First Name</Label>
					<Input type="text" name="fist_name" id="fist_name" className="txt_bg" placeholder="Mary"/>
				  </FormGroup>
				</Col>
				<Col md={8}>
				  <FormGroup>
					<Label for="last_name" className="cntrl-lbl">Last Name</Label>
					<Input type="text" name="last_name" id="last_name" className="txt_bg" placeholder="Costa"/>
				  </FormGroup>
				</Col>
			  </Row>
			  <FormGroup>
				<Label for="email" className="cntrl-lbl">Email</Label>
				<Input type="text" name="email" id="email" className="txt_bg" placeholder="mary@xpto.com"/>
			  </FormGroup>
			  <FormGroup>
				<Label for="username" className="cntrl-lbl">Username</Label>
				<Input type="text" name="username" id="username" className="txt_bg" placeholder="marycosta"/>
			  </FormGroup>
			  <FormGroup>
				<Label for="new_password" className="cntrl-lbl">Password</Label>
				<Input type="password" name="new_password" id="new_password" className="txt_bg" placeholder="Create password"/>
			  </FormGroup>
			  <FormGroup>
				<Label for="confirm_password" className="cntrl-lbl">Confirm password</Label>
				<Input type="password" name="confirm_password" id="confirm_password" className="txt_bg" placeholder="Confirm password"/>
			  </FormGroup>
			  <FormGroup className="terms-lnk"><label><input type="checkbox" /> I agree all statements in Terms of Service</label></FormGroup>
			  <FormGroup className="terms-lnk"><label><input type="checkbox" /> I confirm I am over 18 years old</label></FormGroup>
			  <div className="sub_btn"><Button color="primary" className="mt-2">Register</Button></div>
			</Form>
			<p className="alrdy-mem">Already registered? <Link to="/">Sign in</Link></p>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

export default RegModal;
