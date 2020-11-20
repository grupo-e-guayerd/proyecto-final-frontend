import React from "react";

export default class SignupUser extends React.Component {

    render(){
        return(
            <form className="login"> 
                <h3 className="login-title">Sign Up</h3>

                    <label>First name</label>
                    <input type="text" className="input-user" placeholder="First name" />

                    <label>Last name</label>
                    <input type="text" className="input-user" placeholder="Last name" />

                    <label>Email address</label>
                    <input type="email" className="input-user" placeholder="Enter email" />

                    <label>Password</label>
                    <input type="password" className="input-pass" placeholder="Enter password" />

                <button type="submit" className="login-button">Sign Up</button>

            </form>
        )
    }
}



