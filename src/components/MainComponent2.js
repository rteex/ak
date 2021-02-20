import React, { Component, useState } from "react"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import RegNumberForm from "./RegNumberForm"

// eslint-disable-next-line react/prop-types
/* const Notification = ({ message }) => {
    // eslint-disable-next-line react/prop-types
    if (message === null || message.length < 1) {
        return null
    }
    return (
        <div className="notification">
            {message}
        </div>
    )
} */

class Main extends Component {
    //const Main = () => {
    constructor(props) {
        super(props);
    
        this.state = {
            regNumber: 'XXX-111',
            agree: true
        };
        this.handleRegNumberChange = this.handleRegNumberChange.bind(this);
        console.log("constructor", this.state.regNumber, this.state.agree);
    }

    render() {
        /* const[regNumber, setRegNumber] = useState("XXX-111");
        const[agree, setAgree] = useState(false); */
    
        const handleRegNumberChange = (event) => {
            // console.log("handleNumberChange ", event.target.value)
            this.regNumber = event.target.value;
            //setRegNumber(event.target.value);
        }

        const validateRegNumber = (event) => {
            event.preventDefault();
            console.log("validateRegNumber", this.state.regNumber, this.state.agree);
        }

        const handleAgreeChange = (event) => {
            console.log("handleAgreeChange, event", JSON.stringify(event.target.value));
            this.agree = event.target.value;
            //setAgree(event.target.value);
            console.log("handleAgreeChange, agree", this.agree)
        }

        const HomePage = () => {
            console.log("HomePage", this.state.regNumber, this.state.agree);
            return (
                <RegNumberForm regNumber={this.state.regNumber} handleRegNumberChange={handleRegNumberChange} validateRegNumber={validateRegNumber} agree={this.state.agree} handleAgreeChange={handleAgreeChange} />
            );
        }

        return (
            <div>
                <h2>Phonebook</h2>
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    {/*<Route path='/payment/:regnumber' component={PaymentWithRegnumber} />
              <Route path='/lookup/:regnumber' component={LookupWithRegnumber} />
              <Route path='/auto/:regnumber' component={AutoWithRegnumber} />
              <Route exact path='/terms' component={() => <Terms terms={this.props.terms} />} />
              <Route exact path='/faq' component={() => <Faq faq={this.props.faq} />} />
              <Route exact path='/xyz' component={() => <Xyz />} /> */}
                    <Redirect to="/home" />
                </Switch>

                {/* <Notification message={notificationMessage} /> */}
                {/* <RegNumberForm regNumber={regNumber} handleRegNumberChange={handleRegNumberChange} validateRegNumber={validateRegNumber} agree={agree} handleAgreeChange={handleAgreeChange}/> */}
            </div>
        )
    }
}

export default Main