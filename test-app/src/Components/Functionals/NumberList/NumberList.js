import React from 'react';
import './NumberList.css'

const NumberList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <div className="list-number-container">
            <ul>{listItems}</ul>
        </div>
    );
}

export default NumberList;