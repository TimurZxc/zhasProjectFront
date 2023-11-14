import React from 'react'
import { useTranslation } from 'react-i18next'

const Deadline = () => {
    const { t } = useTranslation();
  return (
    <div>
      <h3 className='compet-info-title_d'>{t("main.is_deadline")}</h3>
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
    </div>
  )
}

export default Deadline