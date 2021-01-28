import React,{useState ,useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { OverlayTrigger , Tooltip,Overlay, Popover } from "react-bootstrap";
import { withNamespaces } from 'react-i18next';

class RegModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  modal: false,
	  condition:false,
	  age:false
    };
	this.toggle = this.toggle.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
	});
	
  }

  handleSubmit(event) {
	event.preventDefault();
	console.log('test1',event.target.checkValidity());
    const data = new FormData(event.target);
	console.log('test2',data.get('last_name'));
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
	// });
	console.log('++++ form submit',  data.get('checkcondition'));
  }

  handleInputChange = (event) => {


	console.log('++++ target', event.target.value)
	// const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const condition = target.checkcondition;

    // this.setState({
    //   [condition]: event.target.value
	// });

	this.setState({ condition : event.target.value })
	console.log('++++',  this.state.condition)
  }

  render() {
	const { t } = this.props;
    return (
		
      <span className="d-inline-block mb-2 mr-2">
		 
        <Link color="text-primary" onClick={this.toggle}>
          {t('lbl_login_reg_now')}  {this.state.condition}
        </Link>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="reg-modal">
          <ModalHeader toggle={this.toggle} className="">  {t('reg_modal_heading')} </ModalHeader>
          <ModalBody>
             <Form onSubmit={this.handleSubmit} noValidate>
			  <Row form>
				<Col md={4}>
				  <FormGroup>
					<Label for="fist_name" className="cntrl-lbl">{t('reg_modal_fname')} </Label>
					<Input type="text" name="fist_name" id="fist_name" className="txt_bg" placeholder="Mary"/>
				  </FormGroup>
				</Col>
				<Col md={8}>
				  <FormGroup>
					<Label for="last_name" className="cntrl-lbl">{t('reg_modal_lname')} </Label>
					<Input type="text" name="last_name" id="last_name" className="txt_bg" placeholder="Costa" />
				  </FormGroup>
				</Col>
			  </Row>
			  <FormGroup>
				<Label for="email" className="cntrl-lbl">{t('reg_modal_email')}</Label>
				<Input type="text" name="email" id="email" className="txt_bg" placeholder="mary@xpto.com"/>
			  </FormGroup>
			  <FormGroup>
				<Label for="username" className="cntrl-lbl">{t('reg_modal_username')}</Label>
				<Input type="text" name="username" id="username" className="txt_bg" placeholder="marycosta"/>
			  </FormGroup>
			  <FormGroup className="reg-password" >
				<Label for="new_password" className="cntrl-lbl">{t('reg_modal_password')}</Label>
				<Input type="password" name="new_password" id="new_password" className="txt_bg" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
				    {['left'].map((placement) => (
						<OverlayTrigger
						// trigger="click"
						key={placement}
						placement={placement}
						overlay={
							<Popover id={`popover-positioned-${placement}`}>
							<Popover.Content>
								<ul>
									<li>{t('reg_modal_p_validation1')}</li>
									<li>{t('reg_modal_p_validation2')}</li>
									<li>{t('reg_modal_p_validation3')}</li>
									<li>{t('reg_modal_p_validation4')}</li>
								</ul>
							</Popover.Content>
							</Popover>
						}
						>
						<Button variant="secondary"> <span className="reg-infoicon">i</span></Button>
						</OverlayTrigger>
						))}
			  </FormGroup>
			  <FormGroup>
				<Label for="confirm_password" className="cntrl-lbl">{t('reg_modal_cf_password')}</Label>
				<Input type="password" name="confirm_password" id="confirm_password" className="txt_bg" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
					</FormGroup>
			  <FormGroup className="terms-lnk"><label><input type="checkbox" value="true" id="checkcondition" name="checkcondition" onChange={this.handleInputChange} checked={this.state.condition} />  {t('reg_modal_condition1')}</label></FormGroup>
			  <FormGroup className="terms-lnk"><label><input type="checkbox" /> {t('reg_modal_condition2')}</label></FormGroup>
			  <div className="sub_btn">
			  {/* <Button type="submit" color="primary" className="mt-2">Register</Button> */}
				  <Button  type="submit"  color="primary" className="mt-2"> {t('reg_modal_btn')}</Button>
			  </div>
			</Form>
			<p className="alrdy-mem"> {t('reg_modal_regtext1')}<Link to="/"> {t('reg_modal_regtext2')}</Link></p>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}
export default withNamespaces()(RegModal);