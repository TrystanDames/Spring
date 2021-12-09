import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                    </>
                </Router>

               {/* <LoginComponent />
               <WelcomeComponent /> */}
            </div>
        );
    }
}

class WelcomeComponent extends Component{
    render() {
        return <div>Welcome trystan</div>
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'tryst',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState (
            {
                [event.target.name]: event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     this.setState (
    //         {
    //             [event.target.name]:event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     this.setState (
    //         {
    //             password:event.target.value
    //         }
    //     )
    // }

    loginClicked() {
        if(this.state.username==='trystan' && this.state.password==='dummy') {
            this.props.history.push("/welcome")
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        }

        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//         return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp;