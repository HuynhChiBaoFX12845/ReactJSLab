import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this) ;
        this.hanldleInputChange= this.hanldleInputChange.bind(this);
    }

    hanldleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value ;
        const name = target.name; 

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current State is : " + JSON.stringify(this.state));
        alert("Current State is : " + JSON.stringify(this.state));
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Vin home, Quận 9<br />
                            Thành phố Hồ Chí Minhn<br />
                            Việt Nam<br />
                            <i className="fa fa-phone"></i>: 0825999871<br />
                            <i className="fa fa-fax"></i>: 0825999871<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">baohc110902@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>Frirst Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='firstname' name='firstname' placeholder='First Name' value={this.state.firstname} onChange={this.hanldleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lasttname' name='lastname' placeholder='Last Name' value={this.state.lastname} onChange={this.hanldleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum' name='telnum' placeholder='Tel. Name' value={this.state.telnum} onChange={this.hanldleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' name='email' placeholder='email' value={this.state.email} onChange={this.hanldleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>

                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.hanldleInputChange}/> {''}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contacType" value={this.state.contactType} onChange={this.hanldleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>

                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name='message' row='12' value={this.state.message} onChange={this.hanldleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;