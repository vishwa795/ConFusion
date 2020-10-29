import React, { Component } from 'react';
import { Navbar, NavbarBrand,Jumbotron,Nav, NavbarToggler,Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isNavOpen : false,
      isModalOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleModal(){
    this.setState({
      isModalOpen : !this.state.isModalOpen
    })
  }
  toggleNav(){
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })
  }
  handleLogin(event){
    this.toggleModal();
    alert("Username: "+this.username.value+" Password: "+this.password.value+" Remeber:"+this.remember.checked);
    event.preventDefault();

  }
  render(){
    return(
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" width="41" height="30" alt="Ristorante Con Fusion" />
          </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-lg fa-home" ></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-lg fa-info" ></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-lg fa-list" ></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-lg fa-address-card" ></span> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-lg fa-sign-in" /> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the world's best cuisine and create a unique Fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username"> Username </Label>
                  <Input type="text" name="username" id="username" innerRef={(input) => this.username = input}/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password"> Password </Label>
                  <Input type="password" name="password" id="password" innerRef={(input) => this.password = input}/>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />
                    Remeber Me
                  </Label>
                </FormGroup>
                <Button type="submit" color="primary" onClick={this.handleSubmit} >Submit</Button>
              </Form>
            </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default Header;
