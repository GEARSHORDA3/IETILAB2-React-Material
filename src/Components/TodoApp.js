import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from './Login'

export class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        const todos = [
            {text: "Learn React", priority: 5, dueDate: new Date()},
            {text: "Learn about APIs", priority: 4, dueDate: new Date(2020, 1, 23)},
            {text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30)}];

        this.state = {items: todos, text: '', priority: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(array) {
        return array.map((item, i) =>
            <tr key={i}>
                <td>{item.text}</td>
                <td>{item.priority}</td>
                <td>{item.dueDate.toString()}</td>
            </tr>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.text.length || this.state.priority == '') {
            document.getElementById("form").reset();
            return;
        }
        const newItem = {text: this.state.text, priority: this.state.priority, dueDate: new Date()};
        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }));
        document.getElementById("form").reset();
    }

    handleChange(event) {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({[key]: value});
    }


    render() {
        return (
            <div>
                <h3>TODO</h3>
                <label>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <label id="activity">Activity :</label>
                        <input type="text" name="text" onChange={this.handleChange}/>
                        <label id="Priority">Priority :</label>
                        <input type="text" name="priority" onChange={this.handleChange}/>
                        <button style={{marginTop: "40px"}}>
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </label>

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRow(this.state.items)}
                    </tbody>
                </table>
            </div>
        );
    }


}
