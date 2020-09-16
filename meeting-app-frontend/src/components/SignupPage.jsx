
import React from "react";
const { signup } = require('../services/auth')

function SignupPage(props) {

    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const passwordRef = React.useRef()  

    const getCredentials = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value
        console.log(email, password, name)

        signup(name, email, password)
    }

    return (
        <form className="container flex-right w-50" onSubmit={(e => e.preventDefault())}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Name</label>
                <input name="name" type="text" className="form-control" placeholder="First name" ref={nameRef} />
            </div>

            {/* <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div> */}

            <div className="form-group">
                <label>Email address</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email" ref={emailRef}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" ref={passwordRef} />
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={getCredentials}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
    )
}

export default SignupPage