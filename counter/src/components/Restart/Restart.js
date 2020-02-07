import React, { Component } from 'react';

class Restart extends Component {
    restartCount(e) {
        e.stopPropagation();
        document.dispatchEvent(new CustomEvent('restart-count', {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return(
            <div style={{padding: "1rem"}}>
                <button class="restart-button" onClick={this.restartCount}>Restart</button>
            </div>
        );
    }
}

export default Restart;