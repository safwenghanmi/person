
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Prsn from './Prsn'; 
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h1> PERSON</h1>
        <Button variant="outline-primary" onClick={this.toggle}>
          Show
        </Button>
        {this.state.show ? <Prsn /> : null}
      </div>
    );
  }
}

export default App;
