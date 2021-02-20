import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            regnumber: props.arg1,
            agree: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('handleSubmit: ' + JSON.stringify(this.state));
        //alert('Palvelu ei ole käytettävissä. Pahoittelemme häiriötä. \rCurrent State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    toggleModal() {
        console.log('toggleModal: ' + JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 text-center">
                        <h3>Syötä auton rekisterinumero</h3>
                    </div>
                    <div className="col-12 text-center">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="regnumber" md={{ size: 2, offset: 4 }}><strong>Rekisterinumero</strong></Label>
                                <Col md={2}>
                                    <Input type="text" id="regnumber" name="regnumber"
                                        value={this.state.regnumber}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 12 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                                Hyväksyn käyttöehdot
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 12 }}>
                                    <Link to={`/payment/${this.state.regnumber}`}>
                                        <Button color="primary" >
                                            Tee haku
                                        </Button>
                                    </Link>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className="col-12 text-center" >
                    <a href="/home/payment">Lisää hakuehtoja</a>
                </div>
            </div>
        );
    }
}

export default Home;