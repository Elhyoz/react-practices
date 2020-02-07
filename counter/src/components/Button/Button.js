import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    increment(e) {
        e.stopPropagation();
        document.dispatchEvent(new CustomEvent('incremented', {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return(
            <div className="button-container">
                <button onClick={this.increment}>Click to increment</button>
            </div>
        );
    }
}