import React from "react";
import Input from "./Input";

function Form(props) {

    const [colour, setColour] = React.useState(false);
    function mouseOver() {
        setColour(true);
    }
    function mouseOut() {
        setColour(false);
    }

    return (
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegistered && (
                <Input type="password" placeholder="ConfirmPassword" />
            )}
            <button style={{ backgroundColor: colour ? "black" : "white" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut} type="submit">{props.isRegistered ? "Login" : "Register"}</button>
        </form>
    );
}

export default Form;
