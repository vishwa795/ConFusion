import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Label, Input, Col,Button, Row} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';


const minLength = (len) => (val) => val && (val.length >= len);
const required = (val) => val && val.length ;
const maxLength = (len) => (val) => !val || (val.length <= len) ;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
    constructor(props){
      super(props);
    }
    handleSubmit(values){
      console.log("The Current state is "+JSON.stringify(values));
      alert("The Current state is "+JSON.stringify(values));
      this.props.resetFeedbackForm();
    }

    render(){
      return(
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/home"> Home</Link></BreadcrumbItem>
                <BreadcrumbItem active> Contact Us</BreadcrumbItem>
              </Breadcrumb>

              <div className="col-12">
                <h3> Contact Us </h3>
                <hr />
              </div>
            </div>
                <div className="row row-content">
                  <div className="col-12">
                    <h3>Location Information</h3>
                  </div>
                  <div className="col-12 col-sm-4 offset-sm-1">
                          <h5>Our Address</h5>
                          <address>
                          1228, Indiranagar<br />
		                      Bengaluru<br />
                          <i className="fa fa-phone"></i>: +123 1234 5678<br />
                          <i className="fa fa-fax"></i>: +123 8765 4321<br />
                          <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                          </address>
                  </div>
                  <div className="col-12 col-sm-6 offset-sm-1">
                      <h5>Map of our Location</h5>
                  </div>
                  <div className="col-12 col-sm-11 offset-sm-1">
                      <div className="btn-group" role="group">
                          <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                          <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
                          <a role="button" className="btn btn-success " href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                      </div>
                  </div>
              </div>
              <div className="row row-content">
                <div className="col-12">
                  <h3>Send Us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                  <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                      <Label htmlFor="firstname" md={2} >First Name</Label>
                      <Col md={10}>
                        <Control.text model=".firstname" id="firstname" name="firstname" validators = {{
                          required,
                          minLength : minLength(3),
                          maxLength : maxLength(15)
                        }}  className="form-control" placeholder="First Name"/>
                        <Errors className="text-danger" model=".firstname" show="touched" messages={{
                          required: "Required ",
                          minLength : "Minimum length required is 3 ",
                          maxLength : "Maximum length allowed is 15 "
                        }}/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="lastname" md={2} >Last Name</Label>
                      <Col md={10}>
                        <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" validators = {{
                          required,
                          minLength : minLength(3),
                          maxLength : maxLength(15)
                        }} className="form-control"/>
                        <Errors className="text-danger" model=".lastname" show="touched" messages={{
                          required: "Required ",
                          minLength : "Minimum length required is 3 ",
                          maxLength : "Maximum length allowed is 15 "
                        }}/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="telnum" md={2} >Tel. Num</Label>
                      <Col md={10}>
                        <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel Num." validators = {{
                          required,
                          minLength : minLength(3),
                          maxLength : maxLength(15),
                          isNumber
                        }} className="form-control"/>
                        <Errors className="text-danger" model=".telnum" show="touched" messages={{
                          required: "Required ",
                          minLength : "Minimum length required is 3 ",
                          maxLength : "Maximum length allowed is 15 ",
                          isNumber : "Please enter only numbers "
                        }}/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="email" md={2} >Email</Label>
                      <Col md={10}>
                        <Control.text model=".email" id="email" name="email" placeholder="Email" validators = {{
                          required, validEmail
                        }}
                        className="form-control"/>
                        <Errors className="text-danger" model=".email" show="touched" messages={{
                          required: "Required",
                          validEmail : "Invalid Email"
                        }}/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col md={{size:6, offset:2}}>
                        <div className="form-check">
                          <Label check>
                            <Control.checkbox model=".agree" name="agree" className="form-check-input"/>{' '}
                            <strong>May We Contact You? </strong>
                          </Label>
                        </div>
                      </Col>
                      <Col md={{size:3, offset:1}} >
                        <Control.select model=".contactType" name="contactType" className="form-control">
                        <option>Tel.</option>
                        <option>Email</option>
                        </Control.select>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="message" md={2} >Feedback</Label>
                      <Col md={10}>
                        <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control"/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col md={{size:10, offset:2}}>
                        <Button type="submit" color="primary"> Send Feedback </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
          </div>
      );
    }
}

export default Contact;
