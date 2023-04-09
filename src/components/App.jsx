import React from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Track from "./Track";

// var userIsRegistered = false;

function App() {
    return (
        <div>

            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/register" element={<Register />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/track" element={<Track />} />

                </Routes>
            </Router>


        </div>
    );
}

export default App;




