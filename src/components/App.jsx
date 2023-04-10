import React, { useState, useEffect } from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Loader from "./Loader";
import LandingPage from "./LandingPage";
import background from "./animal.png"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Track from "./Track";

// var userIsRegistered = false;

function App() {


    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])


    const [message, setMessage] = useState("");
    
    const getWelcomeMessage = async () => {
        const requestOptions = {
            methods: "GET",
            headers: {
                'Content-Type': "application/json",
            },
        };
        const response = await fetch("/api", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            console.log("someting is wrong here"+ message)
            
        }else {
            setMessage(data)
        }
    }

    useEffect(() => {
        getWelcomeMessage();
    }, [])


    return (
        <div class="root" style={{
            backgroundImage: `url(${background})`,
            width: '100vw', height: '100vh',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

        }}>
            {
                loading ? <Loader />
                    :
                    <Router>

                        <Routes>


                            <Route path="/" element={<LandingPage />} />


                            <Route path="/register" element={<Register />} />

                            <Route path="/login" element={<Login />} />

                            <Route path="/home" element={<Home />} />
                            <Route path="/track" element={<Track />} />


                        </Routes>
                    </Router>
            }


        </div>
    );
}

export default App;
