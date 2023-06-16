// import "../MixLad.css"
import NavBar from "../components/NavBar";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Aos from "aos";
import Cards from "../components/MixLad/Cards";
import Splash from "../images/SplashRotated.png"

import { useEffect } from "react";


const Ladies = () => {

    useEffect(() => {
        Aos.init();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, []);
    return (

        <div >
            <title>Evolution Fitness | Ladies</title>
            <meta name="description" content="Ladies Subscriptions" />
            <NavBar active="Ladies" />
            <div className="container-all" data-aos="fade-up">
                <div className="info-headers" >
                    <h2 className="headers"  >OUR <span className="northen"> LADIES </span> MEMBERSHIPS</h2>
                </div>

                <Cards type="ladies" />

                <div className="ps-notes">
                    Kindly note that kids under 16 years old are <span className="red">NOT</span> allowed to enter without supervision.
                </div>
                <div className="bottom-decorations">
                    <img src={Splash} />
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default Ladies;