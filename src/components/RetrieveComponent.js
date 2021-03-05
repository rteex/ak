import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

function Retrieve(props) {

    console.log("Retrieve " + JSON.stringify(props));

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-6 m-3 mx-auto">
                     <Card as="a" onClick={props.validateRetrieve} style={{ cursor: "pointer" }}>
                        <CardBody>
                            <CardTitle><h4>Tietoja haetaan {props.regNumber}</h4></CardTitle>
                        </CardBody>
                        <CardImg width="50%" height="50%" src='../assets/images/searching.gif' alt="" />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Retrieve;    