import { useEffect, useState } from "react";
import AOS from "aos";
import { Trainers, Staff, members } from "./Data"
import { Link } from "react-router-dom";

const Circles = (element) => {


    const [data, setData] = useState([])



    useEffect(() => {
        AOS.init(
        );

        if (element.type === "trainer") {
            setData(Trainers)

        } else if (element.type === "staff") {
            setData(Staff)

        } else {
            setData(members)

        }

    }, []);





    return (
        <div className="circles" data-aos="fade-up">
            {
                data.map((person) => (
                    person.id !== element.except &&
                    <div className="circle" key={person.id}>
                        {person.link &&
                            <Link to={person.link}>
                                <img className="pps-home-circles" src={person.photo} />
                            </Link>
                        }
                        {!person.link &&

                            <img className="pps-home-circles" src={person.photo} />

                        }

                        <div className="circle-name-home">{person.firstName}</div>

                    </div>

                )
                )
            }
        </div>
    )


}

export default Circles