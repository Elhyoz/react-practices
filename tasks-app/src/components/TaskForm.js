import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: '',
    };

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    };

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Write task"
                        onChange={this.onChange}
                        value={this.state.title}>
                    </input>
                    <br/>
                    <br/>
                    <textarea
                        placeholder="Write description"
                        name="description"
                        onChange={this.onChange}
                        value={this.state.description}>
                    </textarea>
                    <input type="submit"/>
                </form>
            </div>
        );
    };

}

