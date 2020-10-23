import React , { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import DishDetailComponent from './DishDetailComponent.js'
class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      selecteddish : null
    }
  }
  dishselect(dish){
    this.setState({
      selecteddish : dish
    });
  }
  renderdish(dish){
    if(dish == null){
      return (
        <div></div>
      )
    }
    else{
      return(
        <DishDetailComponent dish={this.state.selecteddish} />
      )
    }
  }
  render(){
    const menu = this.props.dishes.map((dish)=>{
      return <div key={dish.id} className="col-10 col-md-5 m-1">
                <Card onClick={() => this.dishselect(dish) }>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
    });

    return(
      <div>
      <h1>Restaurante menu </h1>
      <div className="row">
      {menu}
      </div>
      {this.renderdish(this.state.selecteddish)}
      </div>
    );
  }
}
export default Menu;
