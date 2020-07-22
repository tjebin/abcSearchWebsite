import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody,
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className="fixed">
                    <Navbar dark expand="md" >
                        <NavbarBrand className="mr-auto" href="/">ABC Airlines</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/flights'><span className="fa fa-plane fa-lg"></span> Flights</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/deals'><span className="fa fa-tag fa-lg"></span> Deals</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/hotels'><span className="fa fa-hotel fa-lg"></span> Hotels</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'><span className="fa fa-sign-in fa-lg ml-auto"></span> Login</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div className="marginTop">
                    <div>
                        <Jumbotron>
                            <div>
                                <div>
                                    <h1>ABC Search</h1>
                                    <p>ABC Search aims to find the best deals on hotels,restaurants and airline tickets.So that you can get the best deals.</p>
                                </div>
                            </div>
                        </Jumbotron>
                    </div>
                </div>
            </>
        );
    }
}
export default Header;