import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

class Task extends Component {
    render() {
        const {task} =this.props;

        return (
            <div>
                <p className="red">
                    {task.title} -
                    {task.description} -
                    {task.done} -
                    {task.id}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
                </p>
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
};

export default Task;