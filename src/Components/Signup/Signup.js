import React, { Component } from "react"
import axios from "axios"

import Aux from "../../HOC/Wrapper"
import FormError from "../../Layout/formError/FormError"

class Signin extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        formErrors: {
            name: '',
            email: '',
            password: ''
        },
        nameValid: false,
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    handleUserInput(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState(  
            {[name]: value},
            () => { this.validateField(name, value) }
        )
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
                break

            case 'password':
                passwordValid = value.length >= 7
                fieldValidationErrors.password = passwordValid ? '' : 'Password should be more that 6 characters'
                break

            default:
                break
        }

        this.setState({
                formErrors: fieldValidationErrors,
                emailValid,
                passwordValid,
            }, this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }

    submitForm(e) {

        e.preventDefault()

        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            age: 25
        }

        // console.log(userData)

        if (this.state.formValid) {
            // API call
            axios.post('http://127.0.0.1:3001/users/', userData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('user_token', response.data.token);
                localStorage.setItem('user_name', response.data.user.name);
                localStorage.setItem('user_email', response.data.user.email);

                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    render() {

        let formValidationError = null

        if (this.state.formErrors.email !== '' && !this.state.emailValid) {
            formValidationError = (
                <FormError text={this.state.formErrors.email} />
            )
        } else if (this.state.formErrors.password !== '' && !this.state.passwordValid) {
            formValidationError = (
                <FormError text={this.state.formErrors.password} />
            )
        }
        
        return (
            <Aux>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-md-3">
                            <form style={{marginTop: "20px", padding: "10px"}}>
                                <div className="display-4 text-uppercase text-center mb-4">Register</div>

                                { formValidationError }

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input className="form-control" 
                                        type="text" 
                                        id="name" 
                                        placeholder="Enter name"
                                        name="name"
                                        onChange={(event) => this.handleUserInput(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input className="form-control form-control-lg" 
                                        type="email" 
                                        id="email" 
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={(event) => this.handleUserInput(event)} />

                                    <small className="form-text text-muted">Your email will not ever be shared</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" 
                                        type="password" 
                                        id="password" 
                                        placeholder="Password"
                                        name="password"
                                        onChange={(event) => this.handleUserInput(event)} />
                                </div>
                                <button className="btn btn-primary btn-block" 
                                    type="submit" onClick={(event) => this.submitForm(event)}
                                    disabled={!this.state.formValid}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Signin