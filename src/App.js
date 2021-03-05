import React, { useState } from 'react'
import { Switch, Route, useHistory } from "react-router-dom"
import Header from './components/HeaderComponent'
import RegNumberForm from './components/RegNumberForm'
import PaymentForm from "./components/PaymentForm"
import Retrieve from "./components/RetrieveComponent"
import Brief from "./components/BriefComponent"

const App = () => {

    const [regNumber, setRegNumber] = useState("CIH-493");
    const [agree, setAgree] = useState(true);
    const history = useHistory()

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
            history.push('/pay')
        } 
    }

    const validatePayment = (event) => {
        event.preventDefault();
        console.log("validatePayment", regNumber, agree);
        history.push('/retrieve')
    }

    const validateRetrieve = (event) => {
        event.preventDefault();
        console.log("validateRetrieve", regNumber, agree);
        history.push('/brief')
    }    

    return (
        <div className="App">
            <Header />

            <Switch>
                <Route path="/start">
                    <RegNumberForm regNumber={regNumber} handleRegNumberChange={handleRegNumberChange} validateRegNumber={validateRegNumber} agree={agree} handleAgreeChange={handleAgreeChange} />
                </Route>
                <Route path="/pay">
                    <PaymentForm validatePayment={validatePayment} regNumber={regNumber} agree={agree} />
                </Route>
                <Route path="/retrieve">
                    <Retrieve validateRetrieve={validateRetrieve} regNumber={regNumber} />
                </Route>
                <Route path="/brief">
                    <Brief regNumber={regNumber} />
                </Route>
                <Route path="/">
                    <RegNumberForm regNumber={regNumber} handleRegNumberChange={handleRegNumberChange} validateRegNumber={validateRegNumber} agree={agree} handleAgreeChange={handleAgreeChange} />
                </Route>
            </Switch>

        </div>
    )
}

export default App;

