import React from "react";
import { Link } from "react-router-dom";


function Heading() {
    return (
        <header>
            <br />
            <Link to="/home"><h1>Wildlife Conservation</h1></Link>

            {/* <button onClick=>Register</button> */}

            {/* <Link to="/login"><button class="btn btn-light">Login</button></Link> */}
            <Link to="/track"><button class="btn btn-light">Track</button></Link>

            <Link to="/Register"><button class="btn btn-light">Add User</button></Link>
        </header>
    );
}

export default Heading;
