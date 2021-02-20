import React, { useState } from "react"
import RegNumberForm from "./RegNumberForm"
import PaymentForm from "./PaymentForm"

const Main = () => {

    const [mode, setMode] = useState("start")
    const [regNumber, setRegNumber] = useState("");
    const [agree, setAgree] = useState(false);

    const handleRegNumberChange = (event) => {
        console.log("handleRegNumberChange ", event.target.value)
        setRegNumber(event.target.value)
    }

    const handleAgreeChange = (event) => {
        console.log("handleAgreeChange, event", event.target.checked);
        setAgree(event.target.checked);
        console.log("handleAgreeChange, agree", agree)
    }

    const validateRegNumber = (event) => {
        event.preventDefault();
        console.log("validateRegNumber", regNumber, agree);
        if (regNumber.length > 0 && agree) {
            setMode("payment")
        } else {
            setMode("start")
        }
    }
    
    const validatePayment = (event) => {
        event.preventDefault();
        console.log("validatePayment", regNumber, agree);
        setMode("start")
    }

    if (mode === "start") {
        return (
            <div>
                <h2>Sikasovellus</h2>
                <RegNumberForm regNumber={regNumber} handleRegNumberChange={handleRegNumberChange} validateRegNumber={validateRegNumber} agree={agree} handleAgreeChange={handleAgreeChange} />
            </div>
        )
    } else if (mode === "payment") {
        return (
            <div>
                <h2>Rahat plakkariin</h2>
                <PaymentForm validatePayment={validatePayment} agree={agree} />
            </div>
        )
    }
}

export default Main;