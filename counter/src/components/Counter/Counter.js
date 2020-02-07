import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    render() {
        return (
            <div className="counter-container">
                <p>{this.props.number}</p>
            </div>
        );
    };
}
