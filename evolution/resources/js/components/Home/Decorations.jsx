import RunGirl from "../../images/RunGirl.png"
import Splash from "../../images/Splash.png"
import WeightGirl from "../../images/WeightGirl.png"
import AOS from "aos";
import { useEffect } from "react";


const Decorations = ({ nameclass, source }) => {

    useEffect(() => {
        AOS.init(
        );

    }, []);


    return (
        <div>
            {nameclass === "decorations-process" &&
                <img className={nameclass} src={RunGirl} data-aos="fade-right" />
            }

            {
                nameclass === "decorations-subscriptions-splash" &&

                <img className="decorations-subscriptions-splash" src={Splash} />

            }

            {
                nameclass === "decorations-subscriptions-weightgirl" &&

                <img className="decorations-subscriptions-weightgirl" src={WeightGirl} />

            }

        </div>
    )


}

export default Decorations;