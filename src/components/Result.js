// Functional Components do not allow the this keyword
import React from 'react';

const Result = (props) => {
    console.log(props);

    return (
        <div class="u-full-width result">
            <h2>Results</h2>
            <p>The Loan Amount: $ {props.amount}</p>
            <p>Months To Repay: {props.term}</p>
            <p>Total Payment: $ {props.total}</p>
            <p>Monthly Payment: $ {(props.total / props.term).toFixed(2)}</p>
        </div>
    );
}
export default Result;