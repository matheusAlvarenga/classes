import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    renderDish(dish){
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

    render() {

        let comments;

        if(this.props.selectedDish != null){
            comments = this.props.selectedDish.comments.map((comment)=>{
                return (
                    <div>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                );
            });
        }

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.props.selectedDish != null ? <h2>Comments</h2> : null}
                    {this.props.selectedDish != null ? comments : null}
                </div> 
            </div>
            
        );
    }

}

export default DishDetail;