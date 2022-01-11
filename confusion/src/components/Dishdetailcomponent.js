import React, { Component } from 'react';
import { CardImg, Card, CardBody, CardText, CardTitle } from 'reactstrap';
class Dishdetail extends Component {

    renderComment(comments) {
        if (comments != null)
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul>
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author}</p>
                                </li>
                            )
                        })};
                    </ul>
                </div>
            )
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        if (this.props.dish != null)
            return (

                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    {this.renderComment(this.props.dish.comments)}
                </div>


            );
        else
            return (
                <div></div>
            )
    }
}

export default Dishdetail;