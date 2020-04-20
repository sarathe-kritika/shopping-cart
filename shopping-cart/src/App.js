import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "./logo.svg";
import Header from "./Header";
import ShoppingListComponent from "./compontent/ShoppingListComponent";
import "./App.css";
import FilterCompontent from "./compontent/FilterCompontent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col class="fiter" id="title_message" xs={1}>
              <FilterCompontent />
              <div class="button_filter">
                <Button variant="primary">Apply</Button>
              </div>
            </Col>
            <Col xs={11}>
              <ShoppingListComponent />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
