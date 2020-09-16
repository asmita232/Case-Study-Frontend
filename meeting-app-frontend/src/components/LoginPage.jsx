// import React from 'react'

// const { Component } = require("react");

import React from "react";
import { login } from "../services/auth"

function LoginPage(props) {

    const emailRef = React.useRef()
    const passwordRef = React.useRef()  

    const getCredentials = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
        login(email, password).then(data => {
            console.log('data from frontend ', data)
            localStorage.setItem("Authorization",data.token)
            localStorage.setItem("id", data.id)
            
        })
    }
        return (
            <form className="container flex-right w-50" onSubmit={(e)=>e.preventDefault()}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" ref={emailRef}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" ref={passwordRef}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={getCredentials}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
}

export default LoginPage