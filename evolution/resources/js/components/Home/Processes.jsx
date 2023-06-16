// import ResearchIcon from "../images/research.png"
// import FlaskIcon from "../images/flask.png";
// import DashboardIcon from "../images/dashboard.png";
// import ValueIcon from "../images/value.png";
import { useEffect } from "react";
import AOS from "aos";


const Processes = ({ process }) => {


    useEffect(() => {
        AOS.init(
        );

    }, []);





    return (
        <div id={process.id} data-aos="fade-up">
            <div className="process-icon-holder">
                <img src={process.icon} className="process-icon" />
            </div>
            {process.description}
        </div>
    );
}

export default Processes