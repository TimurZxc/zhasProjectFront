import React from 'react'
import '../index.css'
import { useTranslation } from 'react-i18next'
import axios from '../api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../hooks/useAuth";

const Participants = () => {
  const { t } = useTranslation();
  const [profileData, setProfileData] = React.useState([])
  const { auth } = useAuth();
  const isAdmin = auth?.isAdmin
  const email = auth?.email

  const [approveCount, setApproveCount] = React.useState(0);
  const [rejectCount, setRejectCount] = React.useState(0);

  const headers = {
    'Content-Type': 'application/json'
  };
  
  React.useEffect(() => {
    axios.get('participants', {email: email})
      .then((response) => {
        const resData = response.data;
        setProfileData(resData);
      })
      .catch((error) => {
        if (error.response?.status === 304) {
          console.log('response.status', error.response.status);
        }
        else {
          console.error("Ошибка получения данных:", error);
        }
      });
  }, []);

  function handleReject(id) {
    axios.post('participants', {id: id, status: 2, email: email}, { headers: headers })
      .then(() => {
        setRejectCount((prevCount) => prevCount + 1)
      })
      .catch((error) => {
        console.log('error', error)
      });
  }

  function handleApprove(id) {
    axios.post('participants', {id: id, status: 1, email: email})
      .then(() => {
        setApproveCount((prevCount) => prevCount + 1)
      })
      .catch((error) => {
        console.log('error', error)
      });
  }

  const getData = () => {
    axios.get('participants')
      .then((response) => {
        const resData = response.data;
        setProfileData(resData);
      })
      .catch((error) => {
        if (error.response?.status === 304) {
          console.log('response.status', error.response.status);
        }
        else {
          console.error("Ошибка получения данных:", error);
        }
      });
  }

  React.useEffect(() => {
    getData();
  }, [approveCount, rejectCount])

  return (
    <>
    { isAdmin ? (
    profileData.map((data) => (
      <div className={data.status === 0 ? 'profile' : data.status === 1 ? 'profile_green' : 'profile_red'} key={data.app_id}>
        <h2>
          {t('profile.title_1')}
        </h2>
        <div className='account'>

          <div className='account-info'>
            <div className='acc-section1'>
            <div>
                <h4>
                  {t('profile.up_date')}
                </h4>
                <h5>{data.upload_date}</h5>
              </div>
              <div>
                <h4>
                  {t('profile.name')}
                </h4>
                <h5>{data.first_name}</h5>
              </div>
              <div>
                <h4>{t('profile.surname')}</h4>
                <h5>{data.last_name}</h5>
              </div>
              <div>
                <h4>{t('profile.last_name')}</h4>
                <h5>{data.surname}</h5>
              </div>
              <div>
                <h4>{t('profile.email')}</h4>
                <h5>{data.email}</h5>
              </div>
              <div>
                <h4>{t('profile.phone')}</h4>
                <h5>{data.phone_number}</h5>
              </div>
            </div>

          </div>
        </div>
        <h2>{t('profile.title_2')}</h2>

        <div className='application'>
          <div className='app-section1'>
            <div>
              <h4>{t('profile.gender')}</h4>
              <h5>{data.gender}</h5>
            </div>
            <div>
              <h4>{t('profile.IIN')}</h4>
              <h5>{data.iin}</h5>
            </div>
            <div>
              <h4>{t('profile.birth')}</h4>
              <h5>{data.birth_date}</h5>
            </div>
            <div>
              <h4>{t('profile.citizenship')}</h4>
              <h5>{data.gov}</h5>
            </div>

            <div>
              <h4>{t('profile.family')}</h4>
              <h5>{data.family_status}</h5>
            </div>

          </div>
          <div className='app-section2'>
            <div>
              <h4>{t('profile.unemployed_status')}</h4>
              <h5>{data.is_work}</h5>
            </div>
            <div>
              <h4>{t('profile.living_place')}</h4>
              <h5>{data.kato_type}</h5>
            </div>
            <div>
              <h4>{t('profile.address')}</h4>
              <h5>{data.address1}, {data.address2}</h5>
            </div>

            <div>
              <h4>{t('profile.unemployed_time')}</h4>
              <h5>{data.jobless_duration}</h5>
            </div>
            <div>
              <h4>{t('profile.contact_person')}</h4>
              <h5>{data.first_name_trust}, {data.last_name_trust}, {data.surname_trust} </h5>
            </div>
            <div>
              <h4>{t('profile.contacts')}</h4>
              <h5>{data.phone_trust}</h5>
            </div>
            {
              data.social_address &&
              <div>
                <h4>{t('profile.social_network')}</h4>
                <h5>{data.social_address}</h5>
              </div>
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <h4>{t('profile.education')}</h4>
              <h5>{data.education}</h5>
            </div>
            <div>
              <h4>{t('profile.project_info')}</h4>
              <h5>{data.how_know}</h5>
            </div>
            {
              data.gos_prog &&
              <div>
                <h4>{t('profile.goverment_programms')}</h4>
                {data.gos_prog ?
                  <h5>{data.gos_prog}</h5>
                  :
                  <h5>{data.other_gos_prog}</h5>
                }
              </div>
            }
          </div>
          <div className='files-style' style={{  }}>
            <a
              href={'https://194.110.54.189:5088/' + data.selected_file1}
              download="уд_личности"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
            </a>
            <h4 style={{ marginLeft: "0.35rem", fontSize: "15px" }}>Удостоверение</h4>
            <a
              href={'https://194.110.54.189:5088/' + data.selected_file2}
              download="регистрации"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
            </a>
            <h4 style={{ marginLeft: "0.35rem", fontSize: "15px" }}>Подтверждение о регистрации</h4>
            <a
              href={'https://194.110.54.189:5088/' + data.selected_file3}
              download="уязвимости"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="fileDp" icon={faFileDownload}></FontAwesomeIcon>
            </a>
            <h4 style={{ marginLeft: "0.35rem", fontSize: "15px" }}>Подтверждение уязвимости</h4>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between",marginTop:"25px"}}>
        <button className='admin-btns-accept' onClick={()=>{handleApprove(data.app_id)}}>
          {t('profile.approve')}
        </button>
        <button className='admin-btns-reject' onClick={()=> {handleReject(data.app_id)}}>
          {t('profile.reject')}
        </button>
        
        </div>
      </div>
    ))
      ) : <>
       <p style={{color: "black", marginTop: "40px"}}>{t('profile.jury')}</p>
    </>}</>
  )
}

export default Participants