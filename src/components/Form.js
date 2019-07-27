import React, { Component } from 'react';

class Form extends Component {
    state = {  }

    // Create method in React (Preferred Way) normal way works as well
    handleChange = () => {
        console.log('Form Validated');
    }

    handleSubmit = () => {
        console.log('Form Submitted');
    }

    render() { 
        return ( 
           <form>
               <div>
                <label>Amount</label>
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
                    name="months" 
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