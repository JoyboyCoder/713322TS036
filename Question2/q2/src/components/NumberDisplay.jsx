import React from 'react';

const NumberDisplay = ({ prevState, currState, numbers, avg }) => {
    return (
        <div className="display-container">
            <h2>Window States</h2>
            <p><strong>Previous State:</strong> {JSON.stringify(prevState)}</p>
            <p><strong>Current State:</strong> {JSON.stringify(currState)}</p>
            <p><strong>Fetched Numbers:</strong> {JSON.stringify(numbers)}</p>
            <h3>Average: {avg !== null ? avg.toFixed(2) : "N/A"}</h3>
        </div>
    );
};

export default NumberDisplay;
