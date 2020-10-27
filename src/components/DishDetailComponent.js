import React, {Component} from 'react';
import {Card,CardTitle, CardBody, CardImg, CardText} from 'reactstrap';
  function getdate(date){
    const d = new Date(date);
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return(
      <span>
      { month[d.getMonth()] } {d.getDate()}, {d.getFullYear()}
      </span>
    )
  }
  function RenderDish({dish}){
    return <div className="col-sm-10 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} />
        <CardBody>
          <CardTitle><h4>{dish.name}</h4></CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  }
  function RenderComments({comment}){
    return comment.map((c) =>{
    return(
      <div>
      <p>{c.comment}
      <br />
      -- {c.author} , {getdate(c.date)}
      </p>
      </div>
    )
  } )
  }
  function DishDetailComponent({dish}){

    if(dish == null){
      return(
        <div>
        </div>
      )
    }

    else{
    return(
      <div className="row">
        <RenderDish dish={dish} />
        <div className="col-sm-10 col-md-5 m-1">
        <h4>Comments</h4>
          <RenderComments comment={dish.comments} />
        </div>
        </div>
    )


  }
  }

export default DishDetailComponent;
