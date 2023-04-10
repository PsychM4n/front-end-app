import React, { useState, useEffect } from "react";
import Form from "./Form";
import Heading from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

var userIsRegistered = false;

function Register() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <div>
            {
                loading ? <Loader /> : <div><Heading />
                    <div className="container">
                        <Form isRegistered={userIsRegistered} />
                    </div>
                    <Footer></Footer></div>
            }

        </div>
    );
}

export default Register;


