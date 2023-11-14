import React from 'react'
import '../index.css'
import mentorImg from '../img/DSC_8257_1.jpg'
import mentorImg1 from '../img/photo_2023-10-08_16-37-40.jpg'
import mentorImg2 from '../img/photo_2023-10-08_19-29-57.jpg'
import mentorImg3 from '../img/photo_2023-10-08_19-11-24.jpg'
import mentorImg4 from '../img/photo_2023-10-08_20-08-35.jpg'
import mentorImg5 from '../img/photo_2023-10-08_20-12-52.jpg'
import mentorImg6 from '../img/photo_2023-10-08_20-13-58.jpg'
import mentorImg7 from '../img/photo_2023-10-08_20-14-42.jpg'
import mentorImg8 from '../img/photo_2023-10-08_20-15-16.jpg'
import { useTranslation } from 'react-i18next'


const Mentors = () => {
  const {t} = useTranslation()
  return (
    <div className='mentor-page'>
      <div className='mentor-card'>
        <div className='mentor-card-top'>
          <img src={mentorImg} alt="" />
          <div>
            <h2>Кубеева Зульфия</h2>
            <h4>{t('mentors.mentor_1.profession')}</h4>
            <p>{t('mentors.mentor_1.info')}</p>
          </div>
        </div>
        <div className='mentor-card-bottom'>
          <h4>{t('mentors.mentor_1.achievements')}</h4>
          <p>{t('mentors.mentor_1.achievements_text')}</p>
        </div>
      </div>
      <div className='mentor-card'>
        <div className='mentor-card-top' style={{borderBottom: "none"}}>
          <img src={mentorImg1} alt="" />
          <div>
            <h2>Сағынғали Сая Базаралықызы</h2>
            <h4>{t("mentors.mentor_2.status")}</h4>
            <p>{t('mentors.mentor_2.profession')}</p>
          </div>
        </div>
        {/* <div className='mentor-card-bottom'>
          <h4>{t('mentors.mentor_1.achievements')}</h4>
          <p>{t('mentors.mentor_1.achievements_text')}</p>
        </div> */}
      </div>
      <h2 className='title_experts'>{t('mentors.experts')}</h2>
      <div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg2} alt="" />
          <div>
            <h2>Салуатов Аслан</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div>
      <div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg3} alt="" />
          <div>
            <h2>Чингельбаева Мақпал</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div>
      <div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg4} alt="" />
          <div>
            <h2>Мынбаев Дулат</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div><div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg5} alt="" />
          <div>
            <h2>Әзімбай Жандос</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div>
      <div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg6} alt="" />
          <div>
            <h2>Барасилов Жандос</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div>
      <div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg7} alt="" />
          <div>
            <h2>Исимова Сандуғаш</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div>
      <div className='mentor-card'>
        <div style={{ border: 'none', padding: '0'}} className='mentor-card-top'>
          <img src={mentorImg8} alt="" />
          <div>
            <h2>Султанова Асима</h2>
            <h4>{t('mentors.expert')}</h4>
          </div>
        </div>
      </div>
      


    </div>
  )
}

export default Mentors