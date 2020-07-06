import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{ 

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        if (dish.comments != null)
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {dish.comments.map((comment) => {
                        return (
                            <div>
                            <li>{comment.comment}</li> <br></br>
                            <li>-- {comment.author}, {comment.date}</li> <br></br>
                            </div>
                        )
                    })}
                    </ul>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {

        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
