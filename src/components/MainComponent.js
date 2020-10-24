import React ,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import DishDetailComponent from './DishDetailComponent.js'
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selecteddish: null
    }
  }
  dishselect(dishId){
    this.setState({
      selecteddish : dishId
    });
  }
  render(){
    return (
      <div>
      <Navbar dark color="primary" className="navbar-static-top">
      <div className="container">
      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
      <div className="container">
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.dishselect(dishId) }/>
      <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selecteddish )[0]} />
      </div>
      </div>
    );
  }
}

export default Main;
