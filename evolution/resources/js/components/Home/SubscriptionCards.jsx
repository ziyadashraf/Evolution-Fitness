import LadiesCard from "./LadiesCard";
import MixedCard from "./MixedCard";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";






const SubscriptionCards = (props) => {


    let link = "";
    useEffect(() => {
        AOS.init(
        );

        link = props.link;
    }, []);

    return (
        <div className="subscriptions-container" data-aos="fade-up">
            <Link to="/mixed" className="cards-links white"><MixedCard title="MIXED" /></Link>

            <Link to="/ladies" className="cards-links black" > <LadiesCard title="LADIES" /></Link>


        </div>

    )



}

export default SubscriptionCards;

