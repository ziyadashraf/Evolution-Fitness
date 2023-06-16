import Header from "../Header";
import { Classes } from "../Data";
import AOS from "aos";
import { useEffect } from "react";


const Class = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    let i = 0;

    return (

        <div className="classes-container">
            {Classes.map((c) => (
                <div key={c.id}>
                    <div className="class" >
                        <img className="class-photo" src={c.photo} />
                        <div className="class-details" >
                            <Header title={c.title} class="black" element="classes" />
                            <div className="schedules black">
                                {/* Every {c.day} from {c.startTime} till {c.endTime} */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="class-desc">
                        <h5 >Why <span className="bolder">{c.question}</span> ?</h5>
                        {
                            c.advantages.map((a) => (
                                <li data-aos="fade-up" key={i++}>{a}</li>
                            ))
                        }
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Class;