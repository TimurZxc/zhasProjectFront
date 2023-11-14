import { Link, Outlet, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import AuthContext from "../context/AuthProvider";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import navImg2 from '../img/photo_2023-10-08_17-41-19.jpg'
import inst from '../img/inst.png'
import facebook from '../img/facebook.png'
import youtube from '../img/youtube.png'
import vk from '../img/vk.png'
import zhasLogo from '../img/zhas.png'
import cics from '../img/cisc.png'
import kazLogo from '../img/logoKz.png'
import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'
import LanguageSelector from "./LanguageSelector";
import useAuth from "../hooks/useAuth";

const Layout = () => {
    const { t } = useTranslation();

    const { auth } = useAuth();

    const [isShown, setIsShown] = useState(true)
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/');
    }
    const toggleShown = () => {
        setIsShown(!isShown)
    }

    return (
        <>
            <div id="header">
                <div className="header">
                    <header className="haead">
                        <div>
                            <Link to="/">
                                <img src={zhasLogo} className="logo3" alt="zhas project" />
                            </Link>
                        </div>
                        <Link to="/">
                            <img src={kazLogo} className="logo1" alt="" />
                        </Link>
                        <Link to="/">
                            <img src={navImg2} className="logo2" alt="" />
                        </Link>
                        <Link to="/">
                            <img src={cics} className="logo4" alt="" />
                        </Link>
                    </header>
                    <div className="social">
                        <a href="https://instagram.com/uly_dala_org?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank">
                            <img className="social_icon" src={inst} alt="instagram" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img className="social_icon_face" src={facebook} alt="facebook" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img className="social_icon_you" src={youtube} alt="youtube" />
                        </a>
                        <a href="https://www.vk.com/">
                            <img className="social_icon" src={vk} alt="youtube" />
                        </a>
                    </div>
                    {auth.user &&
                        <div className="loggined-buttons">
                            <Link to="/profile">
                                <button>{t("layout.profile")}</button>
                            </Link>
                            <button onClick={logout}>{t("layout.exit")}</button>

                        </div>}
                    {!auth.user &&
                        <Link to='/login'>
                            <button className="login_button">{t("layout.login")}</button>
                        </Link>
                    }
                    <button onClick={toggleShown} className="toggle-btn"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                </div>
                <div className="header-bottom">
                    <p className="number"><p>+77780975533 <span className="line">| </span> </p><span style={{ color: '#FF8A00' }}> 10:00 - 18:00 </span> <p> <span className="line"> |</span> {t("layout.nav_6")}</p></p>
                    <div>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
            {isShown && (
                <nav>
                    {/* <Link to='/'>
                    <button className="btn-nav">Главная</button>
                </Link> */}
                    <Link to='/form'>
                        <button className="btn-nav">{t("layout.nav_1")}</button>
                    </Link>
                    <Link to='/particip'>
                        <button className="btn-nav">{t("layout.nav_2")}</button>
                    </Link>
                    <Link to='/mentors'>
                        <button className="btn-nav">{t("layout.nav_3")}</button>
                    </Link>
                    <Link to='/qa'>
                        <button className="btn-nav">{t("layout.nav_4")}</button>
                    </Link>
                    <Link to='/info'>
                        <button className="btn-nav">{t("layout.nav_5")}</button>
                    </Link>
                    <Link to='/results'>
                        <button className="btn-nav">{t("layout.nav_7")}</button>
                    </Link>
                </nav>)

            }
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
