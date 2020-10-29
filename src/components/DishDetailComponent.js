import React, {Component} from 'react';
import {Card,CardTitle, CardBody, CardImg, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
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
  function DishDetailComponent(props){

    if(props.dish !=null){
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home"> Home </Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/menu"> Menu </Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>

            <div className="col-12">
              <h3> {props.dish.name} </h3>
              <hr />
            </div>
        </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <div className="col-sm-10 col-md-5 m-1">
              <h4>Comments</h4>
              <RenderComments comment={props.comment} />
            </div>
          </div>
        </div>
      )
  }
  else{
    return(
      <h1> Nothing found </h1>
    )
  }
  }

export default DishDetailComponent;
