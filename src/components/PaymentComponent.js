import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

function Payment(props) {
    console.log('Payment: ' + JSON.stringify(props));

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md-8 mx-auto">
                    <Card>
                        <CardBody>
                            <CardTitle><h4>Maksu {props.regNumber}</h4></CardTitle>
                        </CardBody>
                        <CardImg width="80%" src='../assets/images/payment.png' alt="" />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Payment;    