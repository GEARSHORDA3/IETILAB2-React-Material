import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
			<div>
				<h1>{'Text: '+this.props.text} </h1>
				<h1>{'Priority: '+this.props.priority} </h1> 
				<h1>{'dueDate: '+this.props.dueDate.toString()}</h1> 
				
			</div>
        );
    }
}

