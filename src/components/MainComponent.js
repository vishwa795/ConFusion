import React ,{Component} from 'react';
import Menu from './MenuComponent.js';
import DishDetailComponent from './DishDetailComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from './ContactComponent.js'
import About from './AboutComponent.js';

const mapStateToProps = (state) =>{
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const DishWithId = ({match}) =>{
      return (
        <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comment = {this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }

    const HomePage = () =>{
      return (
        <Home
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/aboutus" component={() => <About leaders = {this.props.leaders}/>} />
          <Route path="/contactus" component={Contact} />
          <Redirect to ="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
