import phone from "../images/phone.png"
import mail from "../images/email.png"
import clock from "../images/clock.png"
import pin from "../images/pin.png"
import instagram from "../images/instagram-footer.png"
import facebook from "../images/facebook-icon.png"
import tiktok from "../images/tik-tok.png"
import Aos from "aos"
import { useEffect } from "react"


const Footer = () => {



    const copyright = String.fromCodePoint(0x00A9);
    useEffect(() => {
        Aos.init();



    }, []);

    return (
        <div className="footer">
            <div className="footer-details">
                <div className="footer-detail">
                    <div className="title"><h6>Design & <br />Development</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={phone} />
                            <a href="tel:+201026603488" target="_blank">+201026603488</a>
                        </p>
                        <p className="detail-detail">
                            <img className="detail-img" src={mail} />
                            <a href="mailto: ziyadazab36@gmail.com" target="_blank">ziyadazab36@gmail.com</a>

                        </p>
                    </div>
                </div>
                <div className="footer-detail">
                    <div className="title"><h6>Business <br />Hours</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={clock} />
                            Everyday from 6AM till 12AM
                        </p>

                    </div>
                </div>
                <div className="footer-detail">
                    <div className="title"><h6>Our <br />Address</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={pin} />
                            <a href="https://goo.gl/maps/hRT2uk1UkvAvDeGM6" target="_blank">

                                Egypt,  Giza, 6th of October City, <br />2nd District, Kafrawy Axis, <br />Square Mall, 2nd Floor
                            </a>
                        </p>

                    </div>
                </div>
                <div className="footer-detail">
                    <div className="title"><h6>Contact<br />Us</h6></div>
                    <div className="detail">
                        <p className="detail-detail">
                            <img className="detail-img" src={phone} />
                            <a href="tel: +201050006974" target="_blank">+201050006974</a>


                        </p>
                        <p className="detail-detail">

                            <img className="detail-img" src={instagram} />
                            <a href="https://instagram.com/evolutionfitnesseg" target="_blank" rel="noreferrer noopener">
                                evolutionfitnesseg
                            </a>
                        </p>
                        <p className="detail-detail">

                            <img className="detail-img" src={facebook} />
                            <a href="https://www.facebook.com/EvolutionFitnesseg?mibextid=ZbWKwL" target="_blank" rel="noreferrer noopener">
                                Evolution Fitness
                            </a>
                        </p>

                        {/* <p className="detail-detail">

                            <img className="detail-img" src={tiktok} />
                            <a href="https://www.facebook.com/EvolutionFitnesseg?mibextid=ZbWKwL" target="_blank" rel="noreferrer noopener">
                                Evolution Fitness
                            </a>
                        </p> */}

                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="footer-end">

                {`${copyright}`} 2023 Ziyad Ashraf. <br /> All rights reserved.<br />

            </div>

        </div >
    )


}

export default Footer