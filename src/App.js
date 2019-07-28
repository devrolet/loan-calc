import React, {Component, Fragment} from 'react';
import './App.css';
import Form from './components/Form.js';
import {calculateTotal} from './helper';

import './normalize.css';
import './skeleton.css';

class App extends Component {

  state = {
    total: '',
    amount: '',
    term: ''
  }

  loanInformation = (amount, term) => {
    // console.log('from app.js');
    // console.log(amount);
    // console.log(term);

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
        <h1>Loan Calculator</h1>
        <div className="container">
          <Form 
            loanInformation={this.loanInformation}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
