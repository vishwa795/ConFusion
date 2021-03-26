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
import {postComment, fetchDishes, fetchComments, fetchPromos,fetchUser, fetchLeaders, postFeedback, fbLogin,loginUser} from '../Redux/ActionCreators';
import { actions } from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';


const mapStateToProps = (state) =>{
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser:(token) => dispatch(fetchUser(token)),
  loginUser: (username,password) => dispatch(loginUser(username,password)),
  postComment : (dishId, rating, author, comment) => dispatch(postComment(dishId,rating,author,comment)),
  fbLogin: (accessToken) => dispatch(fbLogin(accessToken)),
  fetchDishes : () => dispatch(fetchDishes()),
  fetchComments : () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
  resetFeedbackForm : () => {dispatch(actions.reset('feedback'))}
})

class Main extends Component {
  componentDidMount(){
    let token = localStorage.getItem("token");
    if(token != null ){
      this.props.fetchUser(token);
      //console.log(this.props.user," from main component!");
    }
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render(){
    const DishWithId = ({match}) =>{
      return (
        <DishDetailComponent dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        comment = {this.props.comments.comments.filter((comment)=> comment.dish === match.params.dishId)}
        isLoading = {this.props.dishes.isLoading}
        errMess = {this.props.dishes.errmess}
        commentsErrMess = {this.props.comments.errMess}
        postComment = {this.props.postComment}
        />
      )
    }

    const HomePage = () =>{
      return (
        <Home
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        isLoading = {this.props.dishes.isLoading}
        errMess = {this.props.dishes.errmess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading = {this.props.promotions.isLoading}
        promosErrMess = {this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading = {this.props.leaders.isLoading}
        leadersErrMess = {this.props.leaders.errMess}
        />
      )
    }
    return (
      <div>
        <Header 
        fbLogin = {this.props.fbLogin}
        loginUser = {this.props.loginUser}
        user = {this.props.user.user}
        isLoggedIn = {this.props.user.isLoggedIn}
        />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route path="/aboutus" component={() => <About leaders = {this.props.leaders}/>} />
              <Route path="/contactus" component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Redirect to ="/home" />
            </Switch>
            </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
