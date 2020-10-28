import React , { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
function CardRender({dish}){
return(  <Link to={`/menu/${dish.id}`}>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
          </Link>
)
}
  function Menu(props){
    const menu = props.dishes.map((dish)=>{
      return <div key={dish.id} className="col-10 col-md-5 m-1">
                <CardRender dish={dish} />
              </div>
    });

    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home"> Home</Link></BreadcrumbItem>
            <BreadcrumbItem active> Menu</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3> Menu </h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
    );
  }
export default Menu;
