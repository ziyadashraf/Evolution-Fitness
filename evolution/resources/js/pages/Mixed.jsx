// import "../MixLad.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Aos from "aos";
import Cards from "../components/MixLad/Cards";
import Splash from "../images/SplashRotated.png"
import { useEffect } from "react";


const Mixed = () => {

    useEffect(() => {
        Aos.init();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, []);

    return (

        <div >
            <title>Evolution Fitness | Mixed</title>
            <meta name="description" content="Mixed Subscriptions" />

            <NavBar active="Mixed" />
            <div className="container-all" data-aos="fade-up" >
                <div className="info-headers" >
                    <h2 className="headers" >OUR <span className="northen"> MIXED </span> MEMBERSHIPS</h2>
                </div>

                <Cards type="mixed" />



                <div className="ps-notes">
                    *Visit hours are available except on the <span className="northen">Ladies </span>subscription times.<br />
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

export default Mixed;