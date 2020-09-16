// import React from 'react'

// const { Component } = require("react");

import React, { Component } from "react";

export default class LoginPage extends Component {
    render() {
        return (
            <form className="container flex-right w-50">
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
    }
}

// class LoginPage extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Login</h1>
//                 <hr />
                
//             </div>
//         )
//     }
// }

// export default LoginPage