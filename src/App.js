import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent.js';
import { DISHES } from './shared/dishes.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    }
  }
  render(){
    return (
      <div>
      <Navbar dark color="dark" className="navbar-static-top">
      <div className="container">
      <NavbarBrand href="/">Restaurant-con-fucus</NavbarBrand>
      </div>
      </Navbar>
      <div className="container">
      <Menu dishes={this.state.dishes}/>
      </div>
      </div>
    );
  }
}

export default App;
