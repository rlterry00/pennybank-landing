import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'; 
export default class Subscribe extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ``,
        }
    }
    // Update state each time user edits their email address
    _handleEmailChange = e => {
        this.setState({ email: e.target.value })
    }
    // Post to MC server & handle its response
    _postEmailToMailchimp = (email, attributes) => {
        addToMailchimp(email, attributes)
            .then(result => {
                // Mailchimp always returns a 200 response
                // So we check the result for MC errors & failures
                if (result.result !== `success`) {
                    this.setState({
                        status: `error`,
                        msg: result.msg,
                    })
                } else {
                    // Email address succesfully subcribed to Mailchimp
                    this.setState({
                        status: `success`,
                        msg: result.msg,
                    })
                }
            })
            .catch(err => {
                // Network failures, timeouts, etc
                this.setState({
                    status: `error`,
                    msg: err,
                })
            })
    }
    _handleFormSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        if (!this.state.email) {
            this.setState({
                status: `error`,
                msg: "Please enter valid email!",
            })
        }
        else {
            this.setState(
                {
                    status: `sending`,
                    msg: null,
                }
            )
            // setState callback (subscribe email to MC)
            this._postEmailToMailchimp(this.state.email, {
                pathname: document.location.pathname,
            })
        }
    }
    render() {
        return (
            <div>
                <br></br>
                {this.state.status === `success` ? (
                    <h3>Thank you! Youʼll receive your confirmation email shortly.</h3>
                ) : (
                        <div >
                            <h3>Subscribe below to be notified of app releases,
                                educational and investment opportunites!</h3>
                            <form
                                id="email-capture"
                                method="post"
                                noValidate
                            >
                                <div className='form-group'>
                                    <div className='form-row'>
                                        <div className='col'>
                                    <input
                                    className='form-control'
                                        placeholder="Email"
                                        onChange={this._handleEmailChange}
                                        required
                                    />
                                    </div>
                                    <div>
                                    <button
                                        className="btn btn-dark"
                                        type="submit"
                                        onClick={this._handleFormSubmit}
                                    >
                                        <i className="fa fa-paper-plane icon-large"></i>
                                    </button>
                                    </div>
                                    </div>
                                    {this.state.status === `error` && (
                                        <div
                                            dangerouslySetInnerHTML={{ __html: this.state.msg }}
                                        />
                                    )}
                                </div>
                            </form>
                        </div>
                    )}
            </div>
        )
    }
}