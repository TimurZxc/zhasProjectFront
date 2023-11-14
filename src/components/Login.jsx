import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../index.css'

import axios from '../api/axios';
import { useTranslation } from 'react-i18next';
const LOGIN_URL = 'database/users/login';

const Login = () => {
    const { t } = useTranslation();

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response?.data.is_admin);
            console.log(response?.data);
            const isAdmin = response?.data.is_admin;
            const isActive = response?.data.is_active;
            const id = response?.data.id;
            const email = response?.data.email;
            setAuth({ user, pwd, isAdmin, isActive, id, email });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Сервер не функционирует, мы работаем над этим');
            } else if (err.response?.status === 400) {
                setErrMsg('Неправильный логин или пароль');
            } else if (err.response?.status === 401) {
                setErrMsg('Проверьте активацию аккаунта');
            } else {
                setErrMsg('Ошибка входа');
            }
            errRef.current.focus();
        }
        // localStorage.setItem("access", isAccess)
        // console.log('user', user, pwd)
    }

    return (
        <section className='section-auth'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>{t("login.sign_in")}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">{t("login.userName")}</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">{t("login.password")}</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button className='auth_butt'>{t("login.to_sign_in")}</button>
            </form>
            <p>
                {t("login.no_acount")}<br />
                <span className="line">
                    <Link to="/register">{t("login.register")}</Link>
                </span>
            </p>
        </section>

    )
}

export default Login
