import { useEffect } from "react";
import AOS from "aos";





const Opinions = ({ member }) => {


    useEffect(() => {
        AOS.init(
        );

    }, []);

    return (


        <div className="member-card" key={member.id} >
            <div className="member-details-card">
                <div className="pp-name-member">
                    <div className="pp-member-card">
                        <img className="ppmember" src={member.pp} />
                    </div>
                    <div className="name-member-card">
                        <h6>{member.firstName + ' ' + member.lastName}</h6>
                        <p>Member since {member.since}</p>
                    </div>
                </div>
                <div className="member-say">
                    {member.opinion}
                </div>
            </div>
        </div>



    )

}

export default Opinions;