import React from 'react'
import '../index.css'
import firstImg from '../img/info4.jpg'
import secondImg from '../img/info1.jpg'
import thirdImg from '../img/info3.jpg'
import fourthImg from '../img/info2.jpg'
import fifthImg from '../img/info5.jpg'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import kazDock from '../files/Uly_Dala_Pol.docx'
import rusDock from '../files/rusDock.docx'

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className='info'>
      <div className='first-info-block'>
        <h2>{t('about_us.defenition')}</h2>
        <h5>{t('about_us.info_1')}</h5>
        <div style={{display: "flex", alignItems: "center"}}>
          <a
            href={rusDock}
            download="Положение"
            // target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="fileD" icon={faFileDownload}></FontAwesomeIcon>
          </a>
          <h2 style={{marginLeft: "0.85rem", fontSize: "28px"}}>{t("about_us.download_rus")}</h2>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
          <a
            href={kazDock}
            download="Ереже"
            // target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="fileD" icon={faFileDownload}></FontAwesomeIcon>
          </a>
          <h2 style={{marginLeft: "0.85rem", fontSize: "28px"}}>{t("about_us.download_kaz")}</h2>
      </div>
      </div>
      <br />
      <div className='images'>
        <img src={firstImg} alt="" />
        <img src={secondImg} alt="" />
        <img src={thirdImg} alt="" />
        <img src={fourthImg} alt="" />
        <img src={fifthImg} alt="" />
      </div>
      <div className='second-info-block'>
        <h3>{t('about_us.title_1')}</h3>
        <p className='second-info-block-title'>{t('about_us.info_2')}.</p>
        <div className='second-block-cards'>
          <div>
            <h4>{t('about_us.cards_title_1')}</h4>
            <p>{t('about_us.cards_info_1')}</p>
          </div>
          <div>
            <h4>{t('about_us.cards_title_2')}</h4>
            <p>{t('about_us.cards_info_2')}</p>
          </div>
          <div>
            <h4>{t('about_us.cards_title_3')}</h4>
            <p>{t('about_us.cards_info_3')}</p>
          </div>
          <div>
            <h4>{t('about_us.cards_title_4')}</h4>
            <p>{t('about_us.cards_info_4')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info