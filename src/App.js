import React, {Component, Fragment} from 'react';
import './App.css';
import Form from './components/Form.js';
import {calculateTotal} from './helper';
import Result from './components/Result.js';

import './normalize.css';
import './skeleton.css';

class App extends Component {

  state = {
    total: '',
    amount: '',
    term: ''
  }

  loanInformation = (amount, term) => {

    const total = calculateTotal(amount, term);

    this.setState({
      amount,
      total,
      term
    })
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>Loan Calculator</h1>
          <div className="container">
            <Form 
              loanInformation={this.loanInformation}
            />

            <Result 
              text = "This is a string of text"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
