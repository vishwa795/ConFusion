import React ,{Component} from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import DishDetailComponent from './DishDetailComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import { Route, Redirect, Switch } from 'react-router-dom';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
    }
  }
  render(){
    const HomePage = () =>{
      return (
        <Home />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to ="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
