import React from 'react';
import { CardImg, CardBody, CardText, Card, CardTitle,CardSubtitle } from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';
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
      <FadeTransform in 
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }} >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle><b>{item.name}</b></CardTitle>
            {item.designation ? <CardSubtitle><b>{item.designation}</b></CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
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
            <RenderCard item={props.promotion} isLoading = {props.promosLoading} errMess={props.promosErrMess} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
    </div>
  )
}
export default Home;
