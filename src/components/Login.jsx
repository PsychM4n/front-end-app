import React, { useState, useEffect } from "react";
import Input from "./Input";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import background from "./animal.png"



// var userIsRegistered = false;

function Login() {

    const [colour, setColour] = React.useState(false);
    function mouseOver() {
        setColour(true);
    }
    function mouseOut() {
        setColour(false);
    }

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {
                loading ? <Loader /> : <div>
                    <div className="container">
                        <form className="form">
                            <Input type="text" placeholder="Username" />
                            <Input type="password" placeholder="Password" />

                            <Link to="/home"><button style={{ backgroundColor: colour ? "black" : "white" }}
                                onMouseOver={mouseOver}
                                onMouseOut={mouseOut} type="submit">Login</button></Link>
                        </form>
                        <p>Not a user yet Contact Us @<a href="mailto:wildlifeconservation@gmail.com">here</a></p>
                    </div>
                </div>
            }

        </div>
    );
}

export default Login;


