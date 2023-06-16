import Instagram from "../../images/instagram-logo.png"
import Facebook from "../../images/facebook-logo.png"
import { Link } from "react-router-dom"
import { Trainers } from "../Data"



const Trainer = () => {


    return (

        <div className="team-trainers">

            {Trainers.map((trainer) => (
                <div className="each-trainer" data-aos="fade-up" key={trainer.id}>
                    <div className="trainer-photo">
                        <Link className="remove-link" to={trainer.link}>
                            <img src={trainer.photo} />
                        </Link>
                    </div>
                    <div className="trainer-name northen">
                        <Link className="remove-link" to={trainer.link}>
                            <h3>{trainer.firstName}</h3>
                        </Link>
                    </div>

                    <div className="trainer-pro"><p>{trainer.pro}</p></div>
                    <div className="trainer-social">
                        <a href={trainer.ig} target="_blank" rel="noreferrer noopener"><img src={Instagram} /></a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Trainer