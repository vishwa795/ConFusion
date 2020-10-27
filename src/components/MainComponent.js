import React ,{Component} from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import DishDetailComponent from './DishDetailComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
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
      <Header />
      <div className="container">
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.dishselect(dishId) }/>
      <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selecteddish )[0]} />
      </div>
      <Footer />
      </div>
    );
  }
}

export default Main;
