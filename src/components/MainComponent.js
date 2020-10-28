import React ,{Component} from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments.js';
import { LEADERS } from '../shared/leaders.js';
import { PROMOTIONS } from '../shared/promotions.js';
import DishDetailComponent from './DishDetailComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import { Route, Redirect, Switch } from 'react-router-dom';
import Contact from './ContactComponent.js'
import About from './AboutComponent.js';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    }
  }
  render(){
    const DishWithId = ({match}) =>{
      return (
        <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comment = {this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }

    const HomePage = () =>{
      return (
        <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/aboutus" component={() => <About leaders = {this.state.leaders}/>} />
          <Route path="/contactus" component={Contact} />
          <Redirect to ="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
