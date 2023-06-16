import { Trainers } from "../components/Data"
import NavBar from "../components/NavBar"
import Instagram from "../images/instagram-logo.png"

// import "../Trainer.css"
import TrainerInfos from "../components/TrainerInfos"
import Splash from "../images/SplashLeft.png"
import Circles from "../components/Circles"
import Header from "../components/Header"
import AOS from "aos"

import { useEffect } from "react"
import Footer from "../components/Footer"

const Trainer = (props) => {

    useEffect(() => {
        AOS.init();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, []);



    return (
        <div>

            <NavBar active="Team" />
            {
                Trainers.map((trainer) =>
                    trainer.id === props.id &&
                    <div className="container-all" key={trainer.id}>
                        <title>Evolution Fitness | {trainer.firstName}</title>
                        <meta name="description" content={"Evolution Fitness Certified Trainer " + trainer.firstName + " " + trainer.lastName} />


                        <div className="trainer-data" data-aos="fade-up">
                            <div className="trainer-identify">
                                <div className="trainer-pic">
                                    <img src={trainer.photo} />
                                </div>
                                <div className="trainer-social">
                                    <a href={trainer.ig} target="_blank" rel="noreferrer noopener"><img src={Instagram} /></a>
                                </div>

                            </div>
                            <div className="trainer-profile" data-aos="fade-up">
                                <div className="trainer-name">
                                    <h1 ><span className="trainer-firstname">{trainer.firstName + ' '}</span><span className="northen">{trainer.lastName}</span></h1>
                                </div>

                                <div className="trainer-pro">
                                    <p>{trainer.pro}</p>
                                </div>
                                <div className="trainer-years">
                                    <p>{trainer.years}</p>
                                </div>

                                <div className="trainer-bio">
                                    {trainer.bio}
                                </div>
                            </div>
                        </div>
                        <div className="right-decorations">
                            <img src={Splash} />

                        </div>
                        <div className="gym-infos" data-aos="fade-up">
                            <TrainerInfos id={trainer.id} />
                        </div>
                        <div className="other-trainers">
                            <Header title="OTHER TRAINERS" data="no" />
                            <Circles type="trainer" except={trainer.id} />
                        </div>
                        <Footer />
                    </div>


                )
            }



        </div>
    )
}

export default Trainer