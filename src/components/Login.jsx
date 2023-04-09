import React from "react";
import Input from "./Input";
import Heading from "./Header";
import Footer from "./Footer";

// var userIsRegistered = false;

function Login() {

    const [colour, setColour] = React.useState(false);
    function mouseOver() {
        setColour(true);
    }
    function mouseOut() {
        setColour(false);
    }
    return (
        <div>
            <Heading />
            <div className="container">
                <form className="form">
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <button style={{ backgroundColor: colour ? "black" : "white" }}
                        onMouseOver={mouseOver}
                        onMouseOut={mouseOut} type="submit">Login</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;


