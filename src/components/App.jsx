import React from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

// var userIsRegistered = false;

function App() {
    return (
        <div>

            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/register" element={<Register />} />

                    <Route path="/login" element={<Login />} />

                </Routes>
            </Router>

        </div>
    );
}

export default App;




