import MachinesIcon from "../images/dumbbell.png";
import PersonalTrainerIcon from "../images/personal.png";
import MembershipIcon from "../images/membership.png";
import CountUp from 'react-countup';
import { Trainers } from "./Data";
import { useEffect, useState } from "react";


const gyminfo = [
    {
        id: "info-machines",
        title: 'Machines',
        no: 45,
        icon: MachinesIcon,
        start: 10,
        duration: 3
    },
    {
        id: "info-trainers",
        title: 'Trainers',
        no: Trainers.length,
        icon: PersonalTrainerIcon,
        start: 0,
        duration: 3,

    },
    {
        id: "info-memberships",
        title: 'Members',
        no: 1000,
        icon: MembershipIcon,
        start: 950,
        duration: 3

    }
]


const GymInfos = (props) => {


    const [details, setDetails] = useState([])




    useEffect(() => {

        setDetails(gyminfo)

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

                            <CountUp start={data.start} end={data.no} delay={0} duration={data.duration} enableScrollSpy>
                                {({ countUpRef }) => (
                                    <div>
                                        <span className="info-number" ref={countUpRef} />
                                        <span className="info-number">+</span><br />
                                    </div>
                                )}
                            </CountUp>

                            <span className="info-desc">{data.title.toUpperCase()}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    )

}

export default GymInfos;