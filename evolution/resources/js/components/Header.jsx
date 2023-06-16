import { useEffect, useState } from "react"

const Header = (props) => {

    const [white, setWhite] = useState(false)
    const [data, setData] = useState("fade-up")

    useEffect(() => {

        if (props.class === 'black') {
            setWhite(true);
        }

        if (props.data == "no") {
            setData("");
        }

        return () => (
            setWhite(false),
            setData("fade-up")
        )

    })

    const c = white ? "headers-holder black " : "headers-holder"

    return (
        <div className={c} >
            {typeof props.title === 'string' && props.element !== 'classes' &&
                <h2 className="info-headers" data-aos={data}>{props.title.toUpperCase()}</h2>
            }
            {typeof props.title !== 'string' &&
                <h2 className="info-headers" data-aos={data}>{props.title}</h2>
            }
            {
                props.element === 'classes' &&
                <h2 className="info-headers" data-aos={data} style={{ fontWeight: 500 }}>{props.title.toUpperCase()}</h2>

            }

        </div>
    )


}

export default Header