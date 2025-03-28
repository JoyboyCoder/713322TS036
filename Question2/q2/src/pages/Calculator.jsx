import React, { useState } from 'react';
import NumberSelector from '../components/NumberSelector';
import NumberDisplay from '../components/NumberDisplay';
import { fetchNumbers } from '../api/api';

const Calculator = () => {
    const [windowPrevState, setWindowPrevState] = useState([]);
    const [windowCurrState, setWindowCurrState] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [avg, setAvg] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFetchNumbers = async (type) => {
        setLoading(true);
        const response = await fetchNumbers(type);
        if (response) {
            setWindowPrevState(response.windowPrevState);
            setWindowCurrState(response.windowCurrState);
            setNumbers(response.numbers);
            setAvg(response.avg);
        }
        setLoading(false);
    };

    return (
        <div className="calculator-container">
            <NumberSelector onFetchNumbers={handleFetchNumbers} />
            {loading ? <p>Loading...</p> : <NumberDisplay 
                prevState={windowPrevState} 
                currState={windowCurrState} 
                numbers={numbers} 
                avg={avg} 
            />}
        </div>
    );
};

export default Calculator;
