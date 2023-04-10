import React, { useState, useEffect } from "react";
import Heading from "./Header";
import Footer from "./Footer";
// import Track from "./Track";
import Loader from "./Loader";

function Home() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return <div>
        {
            loading ? <Loader /> : <div><Heading />
                {/* <h1>Hello</h1>
                <Track /> */}
                <Footer /></div>
        }
    </div>
}

export default Home