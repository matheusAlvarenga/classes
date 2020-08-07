import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderDish({ dish }){
        if(dish != null){

            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        }else{
            return (
                <div></div>
            )
        }
    }

    function RenderComm({ comment, dish }){
            
                const comments =comment.map((comment)=>{
                    return (
                        <div>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    );
                });

                return comments;

    }

    function DishDetail(props) {

        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                       <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {props.dish != null ? <h2>Comments</h2> : null}
                        {props.dish != null ? <RenderComm dish={props.dish} comment={props.comments} /> : null}
                    </div> 
                </div>
            </div>
            
        );
    }

export default DishDetail;