import CountUp from 'react-countup';
import { Trainers } from "./Data";
import { useEffect, useState } from "react";
import CertificateIcon from "../images/certificate.png"
import ExperienceIcon from "../images/experience.png"
import RunningIcon from "../images/running.png"

const trainerInfo = [{
    id: "info-certificates",
    title: <span className='info-desc'>CERTIFICATES</span>,
    icon: CertificateIcon,

},
{
    id: "info-experience",
    title: <span className='info-desc'>YEARS OF <br />EXPERIENCE</span>,
    icon: ExperienceIcon,


},
{
    id: "info-trainees",
    title: <span className='info-desc'>LIFE-TIME TRAINEES</span>,
    icon: RunningIcon,



}]


const TrainerInfos = (props) => {


    const [details, setDetails] = useState([])



    useEffect(() => {

        setDetails(trainerInfo)


    })




    return (
        <div className="three-gym-info">
            {details.map((data) => {
                return (
                    <div className="gym-info" key={data.id} id={data.id}>


                        <div className="info-holders">
                            <img className="info-icon" src={data.icon} />
                        </div>
                        <div className="info-holders">

                            {data.id === "info-certificates" &&
                                Trainers.map((trainer) => props.id === trainer.id &&
                                    <CountUp start={trainer.certificates.start} end={trainer.certificates.no} delay={0} duration={trainer.certificates.duration} key={trainer.id} enableScrollSpy>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span className="info-number" ref={countUpRef} />

                                            </div>
                                        )}
                                    </CountUp>
                                )
                            }

                            {data.id === "info-experience" &&
                                Trainers.map((trainer) => props.id === trainer.id &&
                                    <CountUp start={trainer.experience.start} end={trainer.experience.no} delay={0} duration={trainer.experience.duration} key={trainer.id} enableScrollSpy>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span className="info-number" ref={countUpRef} />
                                                <span className="info-number">+</span><br />

                                            </div>
                                        )}
                                    </CountUp>
                                )
                            }

                            {data.id === "info-trainees" &&
                                Trainers.map((trainer) => props.id === trainer.id &&
                                    <CountUp start={trainer.trainees.start} end={trainer.trainees.no} delay={0} duration={trainer.trainees.duration} key={trainer.id} enableScrollSpy>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span className="info-number" ref={countUpRef} />
                                                <span className="info-number">+</span><br />

                                            </div>
                                        )}
                                    </CountUp>
                                )
                            }

                            <span>{data.title}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    )

}

export default TrainerInfos;