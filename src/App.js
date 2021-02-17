import React, {Component} from 'react';
import './Components/App.css';
import logo from './logo.svg';
import {TodoList} from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from './Components/Login.js';
import {TodoApp} from './Components/TodoApp.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CardMedia from '@material-ui/core/CardMedia';
import {Card, CardContent, makeStyles} from "@material-ui/core";
import imageUrl from './images/fondo2.jpg'

const LoginView = () => (
	<Login/>
);

const TodoAppView = () => (
	<TodoApp/>
);

export class App extends Component {


	constructor(props) {
		super(props)
		this.state = {isLoggedLn : false}
		this.handleLogChange = this.handleLogChange.bind(this);
	}


	render() {
		return (
			<Router>
				<Card className="App">
					<CardMedia>
						<img src={imageUrl} className="photo"/>
						<h1 className="App-title">TODO React App</h1>
					</CardMedia>
					<CardContent>
						<ul>
							<li><Link to="/todo">Todo</Link></li>
							<li><Link to="/">Login</Link></li>
						</ul>

						<div>
							{this.state.isLoggedLn ? (
								<Route path="/todo" component={TodoAppView} />
							) : (
								<Route exact path="/" component={LoginView} />
							)}
						</div>
					</CardContent>
				</Card>
			</Router>
		);
	}

	handleLogChange() {
		alert(this.state.isLoggedLn)
	}


}

