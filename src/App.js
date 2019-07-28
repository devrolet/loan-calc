import React, {Component, Fragment} from 'react';
import './App.css';
import Form from './components/Form.js';
import {calculateTotal} from './helper';

import './normalize.css';
import './skeleton.css';

class App extends Component {

  loanInformation = (amount, term) => {
    // console.log('from app.js');
    // console.log(amount);
    // console.log(term);

    const total = calculateTotal(amount, term);

    console.log(total);
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
