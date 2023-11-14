import React from 'react'
import { useTranslation } from 'react-i18next'
import AtResults from '../files/AtyrWin.docx'
import TurResults from '../files/TurWin.docx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Results = () => {
    const { t } = useTranslation();
  return (
    <div className='info'>
    <div className='first-info-block'>
    <h2>{t('about_us.results0')}</h2>
    <h5>{t('about_us.results1')}</h5>
    <h5>{t('about_us.results2')}</h5>
    <h5>{t('about_us.results3')}</h5>
    <h2>{t('about_us.results4')}</h2>
    <div style={{display: "flex", alignItems: "center"}}>
      <a
        href={AtResults}
        download="Атырауская область"
        // target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fileD" icon={faFileDownload}></FontAwesomeIcon>
      </a>
      <h2 style={{marginLeft: "0.85rem", fontSize: "28px"}}>{t("about_us.list_at")}</h2>
  </div>

  <div style={{display: "flex", alignItems: "center"}}>
      <a
        href={TurResults}
        download="Туркестанская область"
        // target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fileD" icon={faFileDownload}></FontAwesomeIcon>
      </a>
      <h2 style={{marginLeft: "0.85rem", fontSize: "28px"}}>{t("about_us.list_tur")}</h2>
  </div>
  </div>
  </div>
  )
}

export default Results