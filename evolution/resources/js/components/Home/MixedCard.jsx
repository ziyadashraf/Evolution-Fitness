import { useEffect } from "react";
import AOS from "aos";


const MixedCard = (element) => {

    useEffect(() => {
        AOS.init(
        );

    }, []);


    return (



        <div className="card-general recommended" >

            <div className="card-title">
                <h3 className="card-title-green">{element.title}</h3>
            </div>
            <div className="card-details">
                <div className="card-visit-hours">
                    <h4 className="card-subtitles">Visit Hours</h4>
                    <div className="card-details-inside">
                        <p className="card-details-visit-hours thin">Sat, Mon, Wed,<br /> Fri</p>
                        <p className="card-details-visit-hours">6 AM - 12 AM</p>
                        <p className="card-details-visit-hours thin">Sun ,Tue, Thu</p>
                        <p className="card-details-visit-hours">6 AM - 9 AM <br />12 PM - 12 AM</p>
                    </div>
                </div>
                <div className="card-services">
                    <h4 className="card-subtitles">Services</h4>
                    <div className="card-details-inside">
                        <p className="card-details-services thin">Free InBody</p>
                        <p className="card-details-services">Up to 4</p>
                        <p className="card-details-services thin">Private Sessions</p>
                        <p className="card-details-services">Up to 32</p>
                        <p className="card-details-services thin">Classes</p>
                        <p className="card-details-services northen">UNLIMITED</p>
                        <p className="card-details-services thin">Invitations</p>
                        <p className="card-details-services">Up to 15</p>
                        <p className="card-details-services thin">Freeze</p>
                        <p className="card-details-services">Up to 2 mo.</p>
                    </div>
                </div>

                <div className="card-prices">
                    <h4 className="card-subtitles">Starting From</h4>
                    <div className="card-details-inside card-prices">
                        <p className="card-details-prices"><span className="price">999</span>EGP</p>
                    </div>
                </div>

                <div className="button-card-black">
                    <button to="/mixed/checkout"> MORE </button>

                </div>


            </div>
        </div >

    )

}

export default MixedCard