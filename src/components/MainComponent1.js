import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';

/* import Header from './HeaderComponent';
import Payment from './PaymentComponent';
import Lookup from './LookupComponent';
import Auto from './AutoComponent';
import Faq from './FaqComponent';
import Terms from './TermsComponent';
import Xyz from './XyzComponent'; */

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        regnumber: 'XXX-111',
        agree: false
    };
  }
       
    render() {

        const HomePage = () => {
            return(
                <Home arg1="blah"/>
            );
        }

/*         const PaymentWithRegnumber = ({match}) => {

          console.log("PaymentWithRegnumber match " + match.params.regnumber);
          console.log("PaymentWithRegnumber state " + this.state.regnumber);

          return(
              <Payment regnumber={match.params.regnumber}/>
          );
        };

        const LookupWithRegnumber = ({match}) => {

          console.log("LookupWithRegnumber match " + match.params.regnumber);
          console.log("LookupWithRegnumber state " + this.state.regnumber);

          return(
              <Lookup regnumber={match.params.regnumber}/>
          );
        };

        const AutoWithRegnumber = ({match}) => {

          console.log("AutoWithRegnumber match " + match.params.regnumber);
          console.log("AutoWithRegnumber state " + this.state.regnumber);

          return(
              <Auto regnumber={match.params.regnumber} terms={this.props.terms}/>
          );
        };
 */
        console.log("Main");

        return (
        <div className="App">
            {/* <Header />  */}
            <Switch>
              <Route exact path='/home' component={HomePage} />
              {/* <Route path='/payment/:regnumber' component={PaymentWithRegnumber} />
              <Route path='/lookup/:regnumber' component={LookupWithRegnumber} />
              <Route path='/auto/:regnumber' component={AutoWithRegnumber} />
              <Route exact path='/terms' component={() => <Terms terms={this.props.terms} />} />
              <Route exact path='/faq' component={() => <Faq faq={this.props.faq} />} />
              <Route exact path='/xyz' component={() => <Xyz />} /> */}
              <Redirect to="/home" />
            </Switch>
        </div>
        );
    }
}

export default withRouter(Main);

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));