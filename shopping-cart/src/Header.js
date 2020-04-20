import React, { Component } from "react";
import compontent from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "./compontent/SearchComponent";
import ShoppingCartComponent from "./compontent/ShoppingCartComponent";
const greeting = "Welcome to React";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  itemToAdd = () => {
    window.alert("PlaceHolder");
  };
  render() {
    return (
      <Navbar expand="lg" className="bg-blue">
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + "star.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <SearchComponent></SearchComponent>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <ShoppingCartComponent itemToAdd={this.itemToAdd} />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
