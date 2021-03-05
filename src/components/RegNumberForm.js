import React from "react"
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


function RegNumberForm(props) {

	const { regNumber, handleRegNumberChange, validateRegNumber, agree, handleAgreeChange } = props

	console.log('RegNumberForm ', regNumber, agree)

	return (
		<div className="container">
			<div className="row row-content">
				<div className="col-12">
					<h3>Syötä sian rekisterinumero</h3>
				</div>
				<div className="col-12">
					<Form onSubmit={validateRegNumber}>
						<FormGroup row>
							{/* <Label htmlFor="regnumber" md={{ size: 2, offset: 4 }}><strong>Rekisterinumero</strong></Label> */}
							<Label htmlFor="regnumber" md={{ size: 12 }}><strong>Rekisterinumero</strong></Label>
							<Col md={2}>
								<Input type="text" id="regnumber" name="regnumber"
									value={regNumber}
									onChange={handleRegNumberChange} />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 12 }}>
								<FormGroup check>
									<Label check>
										<Input type="checkbox"
											name="agree"
											checked={agree}
											onChange={handleAgreeChange} /> {' '}
											Hyväksyn käyttöehdot
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 12 }}>
								<Button color="primary" >
									Tee haku
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			</div>
			<div className="col-12" >
				<a href="/extended">Lisää hakuehtoja</a>
			</div>
		</div>
	);	
}

export default RegNumberForm