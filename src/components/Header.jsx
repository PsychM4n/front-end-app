import React from "react";
import { Link } from "react-router-dom";


function Heading() {
    return (
        <header>
            <br />
            <div class="row">
                <div class="col-md-6">
                    <Link to="/"><h1>Wildlife Conservation</h1></Link>
                    {/* <button onClick=>Register</button> */}
                </div>
                <div class="col-md-6">
                    <Link to="/login"><button class="btn btn-light">Login</button></Link>
                    <Link to="/Register"><button class="btn btn-light">Register</button></Link>
                </div>
            </div>
        </header>
    );
}

export default Heading;
