import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    constructor(props) {
        super(props)
        this.state = {user : '', pass : ''}
        this.handlePass = this.handlePass.bind(this)
        this.handleUser = this.handleUser.bind(this)
        this.handleLogging = this.handleLogging.bind(this)
    }



    handlePass(event) {
        console.log(this.state.pass+"/pass")
        this.setState({
            pass : event.target.value
        })
    }

    handleUser(event) {
        console.log(this.state.user+"/user")
        this.setState({
            user : event.target.value
        })
    }

    handleLogging() {
        if(this.state.pass==localStorage.getItem(this.state.user)){
            alert("Successful login")
            localStorage.setItem('isLoggedLn', "true")
        }else{
            alert("Sign up failed or not registration")
            localStorage.setItem('isLoggedLn', "false")
            localStorage.setItem(this.state.user, this.state.pass)
        }
        console.log(localStorage.getItem('isLoggedLn') + "  que cambio")
        return localStorage.getItem("isLoggedLn")
    }

    render(){

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleLogging}>
                            <FormControl margin="normal" required fullWidth onChange={this.handleUser}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={this.handlePass}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}