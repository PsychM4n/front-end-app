
import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import { Link } from "react-router-dom";
import background from "./animal.png"



function LandingPage() {

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

    return <div class="landing" style={{
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
            loading ? <Loader /> : <div class="container">
                <p class="title">Wildlife</p>
                <h3 class="subtitle">Save the beauty of nature and discover wildlife like never before</h3>

                <Link to="/login"><button class="btn btn-light login-btn" style={{ backgroundColor: colour ? "#84c1cd" : "white", border: "none" }}
                    onMouseOver={mouseOver}
                    onMouseOut={mouseOut} type="submit">Login</button></Link>
            </div>
        }
    </div>
}

export default LandingPage;