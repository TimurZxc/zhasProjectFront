import React from 'react'
import '../index.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Profile = () => {
    const { t } = useTranslation();
    const { auth } = useAuth();
    const id = auth?.id
    const navigate = useNavigate();

    const DELETE_URL = `profile/${id}`

    const [profileData, setProfileData] = React.useState([])
    const [errMsg, setErrMsg] = React.useState('')
    const [isFull, setIsFull] = React.useState(false)

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
          await axios.delete(DELETE_URL);
          navigate('/');
        } catch (err) {
          console.log('err', err.response);
        }
      };

    React.useEffect(() => {
        axios.get(`profile/${id}`)
          .then((response) => {
                const getData = response.data;
                setProfileData(getData);
                setIsFull(true);
          })
          .catch((error) => {
            if (error.response?.status === 304) {
                console.log('response.status', error.response.status);
                setErrMsg('Вы еще не подавали заявку');
            } 
            else{
                console.error("Ошибка получения данных:", error);
            }
          });
      }, []);

        const dateObject = new Date(profileData.birth_date);

        const day = dateObject.getUTCDate().toString().padStart(2, '0');
        const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so we add 1
        const year = dateObject.getUTCFullYear();

        const formattedDateString = `${day}-${month}-${year}`;

    return (
        <>
        { isFull ?
        <div className='profile'>
            <h2>
                {t('profile.title_1')}
            </h2>
            {profileData.status === 0 &&
                (
                <h2>
                    Статус заявки: в обработке
                </h2>
                )
            }
            {profileData.status === 1 &&
                (
                <h2>
                    Статус заявки: принята
                </h2>
                )
            }
            {profileData.status === 2 &&
                (
                <h2>
                    Статус заявки: отклонена
                </h2>
                )
            }
            <div className='account'>

                <div className='account-info'>
                    <div className='acc-section1'>
                        <div>
                            <h4>
                                {t('profile.name')}
                            </h4>
                            <h5>{profileData.first_name}</h5>
                        </div>
                        <div>
                            <h4>{t('profile.surname')}</h4>
                            <h5>{profileData.last_name}</h5>
                        </div>
                        <div>
                            <h4>{t('profile.last_name')}</h4>
                            <h5>{profileData.surname}</h5>
                        </div>
                        <div>
                            <h4>{t('profile.email')}</h4>
                            <h5>{profileData.email}</h5>
                        </div>
                        <div>
                            <h4>{t('profile.phone')}</h4>
                            <h5>{profileData.phone_number}</h5>
                        </div>
                    </div>

                </div>
            </div>
            <h2>{t('profile.title_2')}</h2>

            <div className='application'>
                <div className='app-section1'>
                    <div>
                        <h4>{t('profile.gender')}</h4>
                        <h5>{profileData.gender}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.IIN')}</h4>
                        <h5>{profileData.iin}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.birth')}</h4>
                        <h5>{formattedDateString}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.citizenship')}</h4>
                        <h5>{profileData.gov}</h5>
                    </div>
                    
                    <div>
                        <h4>{t('profile.family')}</h4>
                        <h5>{profileData.family_status}</h5>
                    </div>

                </div>
                <div className='app-section2'>
                    <div>
                        <h4>{t('profile.unemployed_status')}</h4>
                        <h5>{profileData.isWork}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.living_place')}</h4>
                        <h5>{profileData.kato_type}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.address')}</h4>
                        <h5>{profileData.address1}, {profileData.address2}</h5>
                    </div>

                    <div>
                        <h4>{t('profile.unemployed_time')}</h4>
                        <h5>{profileData.jobless_duration}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.contact_person')}</h4>
                        <h5>{profileData.first_name_trust}, {profileData.last_name_trust}, {profileData.surname_trust} </h5>
                    </div>
                    <div>
                        <h4>{t('profile.contacts')}</h4>
                        <h5>{profileData.phone_trust}</h5>
                    </div>
                    {
                        profileData.social_address &&
                    <div>
                        <h4>{t('profile.social_network')}</h4>
                        <h5>{profileData.social_address}</h5>
                    </div>
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div>
                        <h4>{t('profile.education')}</h4>
                        <h5>{profileData.education}</h5>
                    </div>
                    <div>
                        <h4>{t('profile.project_info')}</h4>
                        <h5>{profileData.how_know}</h5>
                    </div>
                    {
                        profileData.gos_prog &&
                    <div>
                        <h4>{t('profile.goverment_programms')}</h4>
                        {profileData.gos_prog ?
                            <h5>{profileData.gos_prog}</h5>
                        :
                            <h5>{profileData.other_gos_prog}</h5>
                        }
                    </div>
                    } 
                </div>
                <div className='files-style' style={{}}>
                    <a
                        href={'https://194.110.54.189/'+profileData.selected_file1}
                        download="уд_личности"
                        // target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
                    </a>
                    <h4 style={{marginLeft: "0.35rem", fontSize: "15px"}}>Удостоверение</h4>
                    <a
                        href={'https://194.110.54.189/'+profileData.selected_file2}
                        download="регистрации"
                        // target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
                    </a>
                    <h4 style={{marginLeft: "0.35rem", fontSize: "15px"}}>Подтверждение о регистрации</h4>
                    <a
                        href={'https://194.110.54.189/'+profileData.selected_file3}
                        download="уязвимости"
                        // target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
                    </a>
                    <h4 style={{marginLeft: "0.35rem", fontSize: "15px"}}>Подтверждение уязвимости</h4>
                </div>

                <div className='files-style' style={{}}>
                    <a
                        href={'https://194.110.54.189/'+profileData.selected_file4}
                        download="Пенсионные отчисления"
                        // target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
                    </a>
                    <h4 style={{marginLeft: "0.35rem", fontSize: "15px"}}>Пенсионные отчисления</h4>
                    <a
                        href={'https://194.110.54.189/'+profileData.selected_file5}
                        download="Форма проектной заявки"
                        // target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
                    </a>
                    <h4 style={{marginLeft: "0.35rem", fontSize: "15px"}}>Форма проектной заявки</h4>
                </div>
            </div>
            <button onClick={handleDelete}>
                {t('profile.del_btn')}
            </button>
        </div>
        : <>
            <p style={{color: "black", marginTop: "40px"}}>{errMsg}</p>
            <Link to='/form'>
                <button style={{cursor: "pointer", border: "none", color: "#fff", backgroundColor: "#125599"}}>Заполнить заявку</button>
            </Link>
         </>
            }
    </>
    )
}

export default Profile