import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const padding = {
    padding: 5
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        console.log('toggleNav')
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        console.log('isNavOpen', this.state.isNavOpen)

        return (
            <div>
                <Navbar style={{ backgroundColor: "#9BA6A8" }}>
                    <div className="container">
                        <NavbarBrand href="/"><img src='assets/images/autokanta2.png' alt="" height="120" width="300" /></NavbarBrand>
                        {/* <NavbarBrand href="/"> <h3> Sikadata - koko Suomen siat</h3></NavbarBrand> */}
                    </div>
                </Navbar>
                <Navbar style={{ backgroundColor: "#b4e1e4" }} expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <Collapse isOpen={this.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/start'><span className="fa fa-home fa-lg"></span> Aloitus</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/pay'><span className="fa fa-info fa-lg"></span> Ehdot</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/retrieve'><span className="fa fa-question fa-lg"></span> Kysymykset</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/brief'><span className="fa fa-address-card fa-lg"></span> Yhteys</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;