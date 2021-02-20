import React from "react"

const RegNumberForm = ({ regNumber, handleRegNumberChange, validateRegNumber, agree, handleAgreeChange }) => {
	console.log('RegNumberForm ', regNumber, agree)
	return (
		<div>
			<h3>Syötä sian rekisterinumero</h3>
			<form onSubmit={validateRegNumber}>
				<div>
                    Rekisterinumero: <input
						value={regNumber}
						onChange={handleRegNumberChange}
					/>
				</div>
                <div>
                    <input type="checkbox" id="agree" name="agree" checked={agree} onChange={handleAgreeChange}></input>
                    <label htmlFor="agree">Hyväksyn käyttöehdot</label>
                </div>
				<div>
					<button type="submit">Hae</button>
				</div>
			</form>
		</div>
	)
}

export default RegNumberForm