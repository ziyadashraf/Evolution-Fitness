import { useEffect, useState } from 'react';
import HeaderLogo from '../images/BlackLogoE.png';
import { Link } from "react-router-dom";

const NavBar = (prop) => {


    const [hide, setHide] = useState(0)
    const [lastScrollY, setLastScrollY] = useState(0)


    const controlNavBar = () => {
        if (typeof window !== undefined) {

            if (window.scrollY == 0) {
                setHide(0)
                setLastScrollY(window.scrollY);
                return;
            }

            if (window.scrollY >= lastScrollY) {
                setHide(1);
            } else {
                setHide(0);
            }


            setLastScrollY(window.scrollY);



        }
    }


    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('scroll', controlNavBar);
        }




        return () => { window.removeEventListener('scroll', controlNavBar) }
    })


    return (

        <header className={hide && 'hide'}>
            <div id='logo'>
                <Link to="/"><img src={HeaderLogo} width="28" height="32" alt="logo" /></Link>
            </div>
            <div id='primaryNav'>
                <ul>
                    {prop.active === 'Home' ? <Link to="/" className="nav-links"><li className="active">Home</li></Link> : <Link to="/" className="nav-links"><li>Home</li></Link>}
                    {prop.active === 'Mixed' ? <Link to="/mixed" className="nav-links"><li className="active">Mixed</li></Link> : <Link to="/mixed" className="nav-links"><li>Mixed</li></Link>}
                    {prop.active === 'Ladies' ? <Link to="/ladies" className="nav-links"><li className="active">Ladies</li></Link> : <Link to="/ladies" className="nav-links"><li>Ladies</li></Link>}
                    {prop.active === 'Team' ? <Link to="/team" className="nav-links"><li className="active">Team</li></Link> : <Link to="/team" className="nav-links"><li>Team</li></Link>}
                    {prop.active === 'Classes' ? <Link to="/classes" className="nav-links"><li className="active" style={{ marginRight: 0 }}>Classes</li></Link> : <Link to="/classes" className="nav-links"><li style={{ marginRight: 0 }}>Classes</li></Link>}
                </ul>
            </div>
            <div id='secondaryNav'>
                {prop.active === 'Subscribe' ? <Link to="/subscribe" className="nav-links"><span className="active" style={{ marginRight: 0 }}>Subscribe</span></Link> : <Link to="/subscribe" className="nav-links"><span style={{ marginRight: 0 }}>Subscribe</span></Link>}
                {/* <span>Subscribe</span> */}
            </div>
        </header>


    )
}

export default NavBar;