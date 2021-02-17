import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {
  render() {
	const listItems = this.props.todoList.map((toDoComponent) =>
		<Todo
			text={toDoComponent.text}
			priority={toDoComponent.priority}
			dueDate={toDoComponent.dueDate}
		/>	
	);
	
	return (
		<ul>{listItems}</ul>
	);
	
  }
}

