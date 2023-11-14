import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle, faFileDownload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import formKaz from '../files/formKaz2.docx'
import formRus from '../files/formRus2.docx'

const REGISTER_URL = 'database/users/register';

const Register = () => {
    const { t } = useTranslation();
    const toTop = () => {
        window.scrollTo(0, 0);
    }
    const errRef = useRef();

    const [email, setEmail] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [surname, setSurname] = useState('');

    const [phone, setPhone] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        document.getElementById("email").focus();
    }, []) 

    useEffect(() => {
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, firstName, lastName, surname, phone, pwd }),
                {
                    headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'https://194.110.54.189:5088/*'}
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setEmail('');
            setFirstName('');
            setLastName('');
            setSurname('');
            setPhone('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Сервер не функционирует');
                setError(true)
            } else if (err.response?.status === 409) {
                setErrMsg('Почта уже была использована');
            } else {
                setErrMsg('Возникла ошибка регистрации')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>{t("register.reg_success")}</h1>
                    <p>
                        Егер сіз электрондық поштаны көрмесеңіз, "Спам" қойындысын тексеріңіз
                    </p>
                    <span className="line">
                        <Link to="/login">{t("register.sign_in")}</Link>
                    </span>
                </section>
            ) :
            error ?(
                <section>
                    <h1>{t("register.reg_error")}</h1>
                    <br />
                    <p>{t("register.reg_error1")}</p>
                    <p>{t("register.reg_error2")}</p>
                    <p>{t("register.reg_error3")}</p>
                    <p>{t("register.reg_error4")}</p>
                    <p>{t("register.reg_error5")}</p>
                    <br />
                    <div style={{display: "flex", alignItems: "center"}}>
                        <a
                            href={formRus}
                            download="Положение"
                            // target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon className="fileD_form" icon={faFileDownload}></FontAwesomeIcon>
                        </a>
                        <h2 style={{marginLeft: "0.85rem", fontSize: "28px"}}>{t("register.doc_rus")}</h2>
                    </div>
                <br />
                    <div style={{display: "flex", alignItems: "center"}}>
                        <a
                            href={formKaz}
                            download="Ереже"
                            // target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon className="fileD_form" icon={faFileDownload}></FontAwesomeIcon>
                        </a>
                        <h2 style={{marginLeft: "0.85rem", fontSize: "28px"}}>{t("register.doc_kaz")}</h2>
                    </div>
                    <br />
                    <p>{t("register.reg_error_browser")}</p>
                </section>
            ) : (
                <section>
                    <p id="errmsg" ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>{t("register.reg")}</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            {t("register.email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="firstName">
                            {t("register.name")}
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                        />

                        <label htmlFor="lastName">
                            {t("register.lname")}
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                        />

                        <label htmlFor="surname">
                            {t("register.surname")}
                        </label>
                        <input
                            type="text"
                            id="surname"
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                        />

                        <label htmlFor="phone">
                            {t("register.phone")}
                        </label>
                        <input
                            type="phone"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                        />

                        <label htmlFor="password">
                            {t("register.password")}
                            <FontAwesomeIcon icon={faCheck} className={pwd ? "valid" : "hide"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            {t("register.from8")}<br />
                            {t("register.must_contain")}<br />
                        </p>

                        <label htmlFor="confirm_pwd">
                            {t("register.confirm_pwd")}
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            {t("register.must_equal")}
                        </p>

                        <button onClick={toTop} disabled={!email || !firstName || !lastName || !phone || !validMatch ? true : false}
                        className="reg_button_submit">{t("register.to_reg")}</button>
                    </form>
                    <p>
                        {t("register.alredy_have")}<br />
                        <span className="line">
                            <Link to="/login">{t("register.sign_in")}</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register
