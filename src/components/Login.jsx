import React from "react";
import Input from "./Input";
import Heading from "./Header";
import Footer from "./Footer";

// var userIsRegistered = false;

function Login() {
    return (
        <div>
            <Heading />
            <div className="container">
                <form className="form">
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;


