import React, {Component, Fragment} from 'react';
import './App.css';
import Form from './components/Form.js';
import {calculateTotal} from './helper';
import Result from './components/Result.js';
import Message from './components/Message.js';

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
    // Destructure the state
    const {term, amount, total} = this.state;

    // Conditionally Render a Component

    let component;
    if(total === '') {
      component = <Message />
    } else {
      component = <Result 
                    total={total}
                    amount={amount}
                    term={term}
                  />
    }
    return (
      <Fragment>
        <div className="App">
          <h1>Loan Calculator</h1>
          <div className="container">
            <Form 
              loanInformation={this.loanInformation}
            />
            <div className="messages">
              {component}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
