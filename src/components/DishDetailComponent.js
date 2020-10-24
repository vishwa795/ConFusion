import React, {Component} from 'react';
import {Card,CardTitle, CardBody, CardImg, CardText} from 'reactstrap';
class DishDetailComponent extends Component {
  constructor(props){
    super(props);
  }
  getdate(date){
    const d = new Date(date);
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return(
      <span>
      { month[d.getMonth()] } {d.getDate()}, {d.getFullYear()}
      </span>
    )
  }
  render(){
    if(this.props.dish == null){
      return(
        <div>
        </div>
      )
    }
    else{
      const renderComments = this.props.dish.comments.map((c) =>{
      return(
        <div>
        <p>{c.comment}
        <br />
        -- {c.author} , {this.getdate(c.date)}
        </p>
        </div>
      )
    } )
    return(
      <div className="row">
        <div className="col-sm-10 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={this.props.dish.image} />
            <CardBody>
              <CardTitle><h4>{this.props.dish.name}</h4></CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-10 col-md-5 m-1">
        <h4>Comments</h4>
          {renderComments}
        </div>
        </div>
    )


  }
  }
}
export default DishDetailComponent;
