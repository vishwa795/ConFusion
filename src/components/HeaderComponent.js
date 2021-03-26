import React, { Component } from 'react';
import { Navbar, NavbarBrand,Jumbotron,Nav, NavbarToggler,Collapse, NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem, Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Label } from 'reactstrap';
import {Form, Control} from 'react-redux-form';
import {FacebookProvider,Login} from 'react-facebook-sdk';
import {facebook} from '../shared/baseUrl';
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
  handleLogin(values){
    this.toggleModal();
    this.props.loginUser(values.username, values.password);

  }
  handleResponse = (data) => {
    this.toggleModal();
    let accessToken = data.tokenDetail.accessToken;
    this.props.fbLogin(accessToken);
  }
 
  handleError = (error) => {
    this.setState({ error });
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
              { this.props.isLoggedIn?
              <React.Fragment>
                <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav color="dark">
                    <span className="fa fa-lg fa-user" /> {this.props.user.username}
                  </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink className="nav-link text-dark" to="/home">My Favorites</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reserve a Table
                      </DropdownItem>
                    </DropdownMenu>
            </UncontrolledDropdown>
                </Nav>
                <Nav className="p-2" navbar>
                  <NavItem>
                    <Button outline >
                      <span className="fa fa-lg fa-sign-out" /> LogOut
                    </Button>
                  </NavItem>
                </Nav>
               </React.Fragment>
               :
               <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-lg fa-sign-in" /> Login
                    </Button>
                  </NavItem>
                </Nav>
              }
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
              <Form model="login" onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username" model=".username"> Username </Label>
                  <Control.text model=".username" name="username" id="username" className="form-control" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password" model=".password"> Password </Label>
                  <Control.password model=".password" name="password" id="password" className="form-control" />
                </FormGroup>
                <center>
                <FormGroup>
                  <FacebookProvider appId={facebook.clientId}>
                    <Login
                      scope="email"
                      onResponse={this.handleResponse}
                      onError={this.handleError}
                    >
                      <Button className="btn-facebook"><span className="fa fa-lg fa-facebook"></span> Login via Facebook</Button>
                    </Login>
                  </FacebookProvider>
                </FormGroup>
                <Button type="submit" color="primary" onClick={this.handleSubmit} >Submit</Button>
                </center>
              </Form>
            </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default Header;
