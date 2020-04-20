import React, { Component } from "react";
import { FormControl, Form } from "react-bootstrap";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// const greeting = "Welcome to React";
class ShoppingCartComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { itemToAdd } = this.props;

    return (
      <div>
        {localStorage.getItem("coun") > 0 && (
          <div class="itemCount">{localStorage.getItem("coun")}</div>
        )}
        <FontAwesomeIcon onClick={itemToAdd} icon={faShoppingCart} />
      </div>
    );
  }
}

export default ShoppingCartComponent;
