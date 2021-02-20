import React from "react"

const PaymentForm = ({ validatePayment, agree }) => {
	console.log('PaymentForm', agree)
	return (
		<div>
			<h3>Tämä on PaymentForm</h3>
			<form onSubmit={validatePayment}>
				<div>
					<button type="submit">Hyväksy maksu</button>
				</div>
			</form>  
        </div>      
	)
}

export default PaymentForm