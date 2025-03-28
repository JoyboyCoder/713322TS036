import React from 'react';

const NumberSelector = ({ onFetchNumbers }) => {
    return (
        <div className="selector-container">
            <button onClick={() => onFetchNumbers('p')}>Prime Numbers</button>
            <button onClick={() => onFetchNumbers('f')}>Fibonacci</button>
            <button onClick={() => onFetchNumbers('e')}>Even Numbers</button>
            <button onClick={() => onFetchNumbers('r')}>Random Numbers</button>
        </div>
    );
};

export default NumberSelector;
