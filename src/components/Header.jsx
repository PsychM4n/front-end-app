import React from "react";
import { Link } from "react-router-dom";


function Heading() {
    return (
        <header>
            <br />
            <ul>
                <li>
                    <Link to="/"><h1>Wildlife Conservation</h1></Link>
                </li>
                <li>

                    <Link to="/login">Login</Link>
                </li>
                <li>

                    <Link to="/Register">Register</Link>
                </li>
            </ul>

            {/* <button onClick=>Register</button> */}


        </header>
    );
}

export default Heading;
