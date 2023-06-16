import Header from "../components/Header"
import NavBar from "../components/NavBar"
// import "../Classes.css"
import AOS from "aos"
import { useEffect } from "react"
import Class from "../components/Classes/Class"
import Footer from "../components/Footer"


const Classes = () => {

    useEffect(() => {
        AOS.init();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, []);


    return (
        <div>
            <meta name="description" content="Our Classes" />
            <title>Evolution Fitness | Classes</title>

            <NavBar active="Classes" />
            <div className="container-all">
                <div className="first-header">
                    <Header title="OUR CLASSES" data="no" />
                </div>
                <Class />
                <Footer />
            </div>
        </div >
    )
}

export default Classes