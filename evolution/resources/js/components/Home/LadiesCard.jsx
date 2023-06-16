import { useEffect } from "react";
import AOS from "aos";



const LadiesCard = (element) => {



    useEffect(() => {
        AOS.init(
        );

    }, []);

    return (


        <div className="card-general" >
            <div className="card-title">
                <h3>{element.title}</h3>
            </div>
            <div className="card-details black">
                <div className="card-visit-hours">
                    <h4 className="card-subtitles">Visit Hours</h4>
                    <div className="card-details-inside">
                        <p className="card-details-visit-hours thin">Sat, Mon, Wed,<br /> Fri</p>
                        <p className="card-details-visit-hours"> - </p>
                        <p className="card-details-visit-hours thin">Sun ,Tue, Thu</p>
                        <p className="card-details-visit-hours">9 AM - 12 PM </p>
                    </div>
                </div>
                <div className="card-services">
                    <h4 className="card-subtitles">Services</h4>
                    <div className="card-details-inside">
                        <p className="card-details-services thin">Free InBody</p>
                        <p className="card-details-services">Up to 4</p>
                        <p className="card-details-services thin">Private Sessions</p>
                        <p className="card-details-services">4 Sessions</p>
                        <p className="card-details-services thin">Classes</p>
                        <p className="card-details-services">Up to 50</p>
                        <p className="card-details-services thin">Invitations</p>
                        <p className="card-details-services">Up to 10</p>
                        <p className="card-details-services thin">Freeze</p>
                        <p className="card-details-services">Up to 2 mo.</p>
                    </div>
                </div>
                <div className="card-prices">
                    <h4 className="card-subtitles">Starting From</h4>
                    <div className="card-details-inside card-prices">
                        <p className="card-details-prices"><span className="price">799</span>EGP</p>
                    </div>
                </div>
            </div>
            <div className="button-card-white">

                {element.link ? <button to="subscribe/ladies"> MORE </button> : <button to="/ladies"> MORE </button>}



            </div>
        </div >


    )

}

export default LadiesCard