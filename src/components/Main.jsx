import React from 'react'
import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='top-main'>
        <h1>{t("main.slogan")}</h1>
        <h2>{t("main.sub_slogan")}</h2>
        <div className='buttons-main'>
          <button>{t("main.became_part_but")}</button>
          <button>{t("main.mentors_page_but")}</button>
          {/* <button>Стать принимающей организацией</button> */}
        </div>
        <h5>{t("main.app_count")}<span>500</span></h5>
        <a href="#middle"><button className='bottom'><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></button></a>
      </div>
      <h3 style={{marginTop: "3rem", color: "#FF8A00", textAlign: "center"}}>Проект реализуется только в Туркестанской и Атырауской областях</h3>
      <h3 className='compet-info-title'>{t("main.important_info")}</h3>
      <div className='compet-info'>
        <div>
          <h5>{t("main.deadline1")}</h5>
          <p>{t("main.from")} 9{t("main.s")} {t("main.october")} 2023 {t("main.year_to")} 23:59 {t("main.hour")} 22 {t("main.october")} 2023 {t("main.year_by")}</p>
        </div>
        <div>
          <h5>{t("main.deadline2")}</h5>
          <p>{t("main.from")} 23{t("main.d")} {t("main.fromOctoberKz")} {t("main.up_to")} 31{t("main.s")} {t("main.toOctoberKz")} 2023 {t("main.year_by")}</p>
        </div>
        <div>
          <h5>{t("main.deadline3")}</h5>
          <p>1{t("main.st")} {t("main.november")} 2023 {t("main.year_by")}</p>
        </div>
        <div>
          <h5>{t("main.deadline4")}</h5>
          <p>{t("main.deadlie_4_kz")}</p>
        </div>
      </div>
      <h3 className='compet-info-title warning'>{t("main.late_subm")}</h3>
      <h3 className='compet-info-title' style={{marginBottom:20}}>{t("main.what_required")}</h3>
      <div className='middle-main' id='middle'>
        <p style={{margin:'20px 0', textAlign: "center"}}>«ZHAS PROJECT» - {t("main.zhas_desc")} </p>
        <ul>
          <li>{t("main.li1")}</li>
          <li>{t("main.li2")}</li>
          <li>{t("main.li3")}</li>
          <li>{t("main.li4")}</li>
        </ul>
        <div className='middle-blocks'>
          <div>
            <div>
              <span>01</span>
              <h2>{t("main.step1")}</h2>
            </div>
            <p>{t("main.step1_desc")}</p>
          </div>
        </div>
        <div className='middle-blocks'>
          <div>
            <div>
              <span>02</span>
              <h2>{t("main.step2")}</h2>
            </div>
            <p>{t("main.step2_desc")}</p>
          </div>
        </div>
        <div className='middle-blocks'>
          <div>
            <div>
              <span>03</span>
              <h2>{t("main.step3")}</h2>
            </div>
            <p>{t("main.step3_desc")}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main