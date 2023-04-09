import React from "react";
import Form from "./Form";
import Heading from "./Header";
import Footer from "./Footer";

var userIsRegistered = false;

function Register() {
    return (
        <div>
            <Heading />
            <div className="container">
                <Form isRegistered={userIsRegistered} />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Register;


