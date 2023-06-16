import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { ladiesCard, mixedCard } from "../Data";
import Aos from "aos";
import { Link } from "react-router-dom";

const Card = (prop) => {

    const navigate = useNavigate()

    const [details, setDetails] = useState([]);

    useEffect(() => {
        if (prop.type == 'ladies') {
            setDetails(ladiesCard)
        } else {
            setDetails(mixedCard)
        }


        Aos.init();

    }, [])



    return (


        <div className="cards-holder" >

            {
                details.map((detail) => (
                    <div className={detail.class} key={detail.id}>
                        <p className={detail.status}>{detail.statustext}</p>

                        <div className="c-title">
                            <h3 className={detail.headerclass}><span className={detail.numberClass}>{detail.number} </span>{detail.title}</h3>
                        </div>
                        <div className={detail.detailsclass}>
                            <div className="c-visit-hours">
                                <h4 className="card-subtitles">Visit Hours</h4>
                                {detail.id >= 5 &&
                                    <div className="c-details-inside">
                                        <p className={detail.visits.classTitles}>{detail.visits.visitDays}</p>
                                        <p className={detail.visits.classNumbers}>{detail.visits.visitHours}</p>
                                        <p className={detail.visits.classTitles}>{detail.visits.duration}</p>
                                        <p className={detail.visits.classNumbers}>{detail.visits.durationValue}</p>
                                    </div>
                                }

                                {detail.id < 5 &&
                                    <div className="c-details-inside">
                                        <p className={detail.visits.classTitles}>{detail.visits.visitDays}</p>
                                        <p className={detail.visits.classNumbers}>{detail.visits.visitHours}</p>

                                    </div>
                                }
                            </div>
                            <div className="c-services">
                                <h4 className="card-subtitles">Services</h4>
                                <div className="c-details-inside">
                                    <p className={detail.services.classTitles}>{detail.services.inbody}</p>
                                    <p className={detail.services.classNumbers}>{detail.services.inbodyNo}</p>
                                    <p className={detail.services.classTitles}>{detail.services.privateSessions}</p>
                                    <p className={detail.services.classNumbers}>{detail.services.privateSessionsNo}</p>
                                    {/* <p className={detail.services.classTitles}>{detail.services.classes}</p>
                                    <p className={detail.services.classNumbers}>{detail.services.classesNo}</p> */}
                                    <p className={detail.services.classTitles}>{detail.services.invitations}</p>
                                    <p className={detail.services.classNumbers}>{detail.services.invitationsNo}</p>
                                    <p className={detail.services.classTitles + detail.services.freezeClass}>{detail.services.freeze}</p>
                                    <p className={detail.services.classNumbers + detail.services.freezeClass}>{detail.services.freezeNo}</p>
                                </div>
                            </div>

                            <div className="card-prices">
                                <h4 className="card-subtitles">Price</h4>
                                <div className="card-details-inside card-prices">
                                    <p className="card-details-prices"><span className="c-price">{detail.price}</span>EGP</p>
                                </div>
                            </div>

                            <div className={detail.buttonclass}>
                                <button onClick={() => navigate("/subscribe")}> SUBSCRIBE </button>
                            </div>


                        </div>


                    </div >
                ))
            }
        </div>


    )

}

export default Card;