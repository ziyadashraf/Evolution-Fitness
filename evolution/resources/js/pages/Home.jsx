// import "../App.css"

import React from 'react';
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Trainers from "../components/Circles";
import Processes from "../components/Home/Processes";
import GymInfos from "../components/GymInfos";
import SubscriptionCards from "../components/Home/SubscriptionCards";
import Gallery from "../components/Home/Gallery"
import Opinions from "../components/Home/Opinions";
import Decorations from "../components/Home/Decorations";
import AOS from "aos";
import OriginalLogo from "../images/BlackLogo.png";
import WhiteLogo from "../images/WhiteGreenLogo.png"


import { processes } from "../components/Data";
import { members } from "../components/Data";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";










function App() {






    useEffect(() => {
        AOS.init();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, []);




    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;


        return {
            width
        };
    }



    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }


    let dimensions = useWindowDimensions();





    return (

        <div>
            <title>Evolution Fitness | Home</title>

            <meta name="description" content="Evolution Fitness is a complete gym and fitness center providing you the ultimate gym
experience." />
            <NavBar active="Home" />

            <div id="contain-all">
                <div id="only-home">
                    <div id="slogan" >
                        <h1 >MAKE<br />YOUR HEALTH<br />A<br /><span>PRIORITY</span></h1>
                    </div>
                    {dimensions.width <= 949 &&
                        <div><img src={WhiteLogo} width="125" height="115" alt="logo" /></div>
                    }
                    {dimensions.width > 949 &&
                        <div> <img src={OriginalLogo} width="90" height="45" alt="logo" /></div>
                    }

                </div>

                <div className="process-trainers">

                    <Decorations nameclass="decorations-process" />

                    <div className="process">

                        <Header title="OUR PROCESS" />
                        <div className="process-info" >
                            {processes.map((process) =>
                                <Processes process={process} key={process.id} />
                            )}
                        </div>
                    </div>

                    <div className="gym-infos">
                        <GymInfos type="gym" />
                    </div>

                    <div className="gym-trainers">
                        <Header title="OUR TRAINERS" />
                        <Trainers nameClass="circle-name-home" ppClass="pps-home-circles" type="trainer" />
                    </div>


                </div>



                <div className="gallery">
                    <Header title="GALLERY" class="black" />
                    <div className="gallery-container">
                        <Gallery />
                    </div>
                </div>



                <div className="subscription-plans">
                    <Decorations nameclass="decorations-subscriptions-splash" />
                    <Header title="SUBSCRIPTION PLANS" />


                    <SubscriptionCards />
                    <Decorations nameclass="decorations-subscriptions-weightgirl" />

                    <div className="ps-notes">
                        *Classes count may differ between subscriptions.
                    </div>


                </div>



                <div className="discover-classes">
                    <Header title={["DISCOVER OUR", <br key={5} />, "CLASS LIST"]} class="black" />

                    <div className="button-large" data-aos="fade-up">
                        <Link to="/classes"><button > MORE </button></Link>
                    </div>
                </div>


                <div className="members-opinions">
                    <Header title="WHAT MEMBERS SAY" />
                    <p className="descriptions">How we spiced up their workouts? Hear what they say.</p>
                    <div className="member-cards" data-aos="fade-up">

                        {members.map((member) => (
                            // member.id <= 3 &&
                            <Opinions member={member} key={member.id} />
                        ))
                        }
                    </div>
                </div>

                <Footer />

            </div >



        </div >

    )

}

export default App;
