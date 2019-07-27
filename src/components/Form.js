import React, { Component } from 'react';

class Form extends Component {
    state = { 
        amount: '',
        term : ''
     }

    // Create method in React (Preferred Way) normal way works as well
    handleChange = (e) => {
        // console.log('Form Validated');

        // Desturcturing
        const {name, value} = e.target;
        
        // update the state
        this.setState({
            [name] : value
        })
    }

    handleSubmit = () => {
        console.log('Form Submitted');
    }

    render() { 
        // extract some contents from the state
        const {amount} = this.state;

        return ( 
           <form>
               <div>
                <label>Amount {amount}</label>
                <input 
                    onChange={this.handleChange}
                    name="amount" 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Eg: 3000" />
               </div>
               <div>
                <label>Months to Repay</label>
                <select 
                    onChange={this.handleChange} 
                    name="term" 
                    className="u-full-width">
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                </select>
               </div>
               <div>
                   <input 
                    onClick={this.handleSubmit} 
                    type="submit" value="Calculate" 
                    className="u-full-width button-primary" />
               </div>
           </form>
         );
    }
}
 
export default Form;