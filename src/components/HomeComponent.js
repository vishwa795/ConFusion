import React from 'react';
import { CardImg, CardBody, CardText, Card, CardTitle,CardSubtitle } from 'reactstrap';
import {Loading} from './LoadingComponent';
function RenderCard({item, isLoading, errMess}){
  if(isLoading){
    return(
      <Loading />
    )
  }
  else if(errMess){
    return(
      <h4>{errMess}</h4>
    )
  }
  else{
    return(
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle><b>{item.name}</b></CardTitle>
          {item.designation ? <CardSubtitle><b>{item.designation}</b></CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    )
  }
}

function Home(props) {
  return(
    <div className="container">
      <h4>Home</h4>
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} isLoading={props.isLoading} errMess={props.errMess} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
    </div>
  )
}
export default Home;
