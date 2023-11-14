import React, { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import formDock from "../files/formDock.docx"
import formDockKaz from "../files/formDockKaz.docx"


const Form = () => {
    const { t } = useTranslation();

    const { auth } = useAuth();

    const user = auth?.user
    const id = auth?.id

    const errRef = React.useRef();
    const [errMsg, setErrMsg] = React.useState('');

    const URL_FORM = `account/${id}/add-application`;

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [iin, setIin] = React.useState('');

    const [birthDate, setBirthDate] = React.useState('');

    const [gov, setGov] = React.useState('');

    const [gender, setGender] = React.useState('');

    const [familyStat, setFamilyStat] = React.useState('');

    const [isWork, setIsWork] = React.useState('');

    const [katoType, setKatoType] = React.useState('');

    const [address1, setAddress1] = React.useState('');
    const [address2, setAddress2] = React.useState('');

    const [education, setEducation] = React.useState('');

    const [joblessDur, setJoblessDur] = React.useState('');

    const [gosProg, setGosProg] = React.useState('');

    const [otherGosProg, setOtherGosProg] = React.useState('')

    const [howKnow, setHowKnow] = React.useState('');

    const [isSocial, setIsSocial] = React.useState('');

    const [socialAddress, setSocialAddress] = React.useState('');

    const [firstNameTrust, setFirstNameTrust] = React.useState('');
    const [lastNameTrust, setLastNameTrust] = React.useState('');
    const [surnameTrust, setSurnameTrust] = React.useState('');

    const [phoneTrust, setPhoneTrust] = React.useState('');

    const [region, setRegion] = React.useState('');

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [selectedFile1, setSelectedFile1] = React.useState(null);
    const [selectedFile2, setSelectedFile2] = React.useState(null);
    const [selectedFile3, setSelectedFile3] = React.useState(null);
    const [selectedFile4, setSelectedFile4] = React.useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleFileChange1 = (event) => {
        const file = event.target.files[0];
        setSelectedFile1(file);
    };
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        setSelectedFile2(file);
    };
    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        setSelectedFile3(file);
    };
    const handleFileChange4 = (event) => {
        const file = event.target.files[0];
        setSelectedFile4(file);
    };

    // const [selectedFiles, setSelectedFiles] = React.useState([]);

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
    // };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleFamilyChange = (e) => {
        setFamilyStat(e.target.value);
    };

    const handleIsWorkChange = (e) => {
        setIsWork(e.target.value);
    };

    const handleKatoChange = (e) => {
        setKatoType(e.target.value);
    };

    const handleEduChange = (e) => {
        setEducation(e.target.value);
    };

    const handleJoblessChange = (e) => {
        setJoblessDur(e.target.value);
    };

    const handleGosProgChange = (e) => {
        setGosProg(e.target.value);
    };

    const handleHowKnowChange = (e) => {
        setHowKnow(e.target.value);
    };

    const handleIsSocChange = (e) => {
        setIsSocial(e.target.value);
    };

    const handleRegion = (e) => {
        setRegion(e.target.value);
    };

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/');
    }

    React.useEffect(() => {
        axios.get(`account/${id}/add-application`)
          .catch((error) => {
            if (error.response?.status === 304) {
                console.log('response.status', error.response.status);
                setErrMsg('Вы еще не подавали заявку');
            } 
            else{
                setErrMsg("Ошибка получения данных:", error);
            }
          });
      }, []);

    const formData = new FormData();

    const handleSubmit = async (e) => {
        formData.append('iin', iin);
        formData.append('birthDate', birthDate);
        formData.append('gov', gov);
        formData.append('gender', gender);
        formData.append('familyStat', familyStat);
        formData.append('isWork', isWork);
        formData.append('katoType', katoType);
        formData.append('address1', address1);
        formData.append('address2', address2);
        formData.append('education', education);
        formData.append('joblessDur', joblessDur);
        formData.append('gosProg', gosProg);
        formData.append('otherGosProg', otherGosProg);
        formData.append('howKnow', howKnow);
        formData.append('isSocial', isSocial);
        formData.append('socialAddress', socialAddress);
        formData.append('firstNameTrust', firstNameTrust);
        formData.append('lastNameTrust', lastNameTrust);
        formData.append('surnameTrust', surnameTrust);
        formData.append('phoneTrust', phoneTrust);
        formData.append('user', user);
        formData.append('selectedFile', selectedFile);
        formData.append('selectedFile1', selectedFile1);
        formData.append('selectedFile2', selectedFile2);
        formData.append('selectedFile3', selectedFile3);
        formData.append('selectedFile4', selectedFile4);
        formData.append('region', region);
        e.preventDefault();
        try {
            const response = await axios.post(URL_FORM, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': 'https://194.110.54.189:5088/*'
                    }
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            setIin('')
            setBirthDate('')
            navigate('/profile')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Сервер не функционирует, мы работаем над этим');
            }
            else if (err.response?.status === 409) {
                setErrMsg('Вы уже отправляли заявку');
            } 
            else if (err.response?.status === 413) {
                setErrMsg('Размер файлов слишком велик');
            } 
            else if (err.response?.status === 400) {
                setErrMsg('Заполните все поля');
            } 
            else {
                setErrMsg('Возникла ошибка при отправки заявки')
            }
        }
        // console.log({iin, birthDate, gov, gender, familyStat, isWork, katoType, address1, address2, education, joblessDur, gosProg, otherGosProg, howKnow, isSocial, socialAddress,
        //     firstNameTrust, lastNameTrust, surnameTrust, phoneTrust, selectedFile, selectedFile1, selectedFile2, user});
    }

    return (
        <section className="form">
            <h1>{t("form.form_page")}</h1>
            <br />
            <p>{t("form.for_particip")}</p>
            <br />
            <label htmlFor="region">{t("form.region.label")} </label>
            <select id="region" value={region} onChange={handleRegion}>
                <option value="">{t("form.region.d_option")}</option> 
                <option value="Туркестанская область">{t("form.region.option1")}</option>
                <option value="Атырауская область">{t("form.region.option2")}</option>
            </select>

            <label htmlFor="iin">{t("form.iin")}</label>
            <input
                type="text"
                id="iin"
                onChange={(e) => setIin(e.target.value)}
                value={iin}
                required
            />
            <label htmlFor="bdate">{t("form.b_date")}</label>
            <input
                type="date"
                id="bdate"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
                required
            />

            <label htmlFor="gov">{t("form.input_gover.label")}</label>
            <input
                type="text"
                id="gov"
                placeholder={t("form.input_gover.placeholder")}
                onChange={(e) => setGov(e.target.value)}
                value={gov}
                required
            />
            <label htmlFor="gender">{t("form.gender_select.label")} </label>
            <select id="gender" value={gender} onChange={handleGenderChange}>
                <option value="">{t("form.gender_select.d_option")}</option> 
                <option value="Мужской">{t("form.gender_select.option1")}</option>
                <option value="Женский">{t("form.gender_select.option2")}</option>
            </select>

            <label htmlFor="familyStat">{t("form.family_stat_select.label")} </label>
            <select id="familyStat" value={familyStat} onChange={handleFamilyChange}>
                <option value="">{t("form.family_stat_select.d_option")}</option>
                <option value="Холост / не замужем">{t("form.family_stat_select.option1")}</option>
                <option value="В браке">{t("form.family_stat_select.option2")}</option>
                <option value="В разводе">{t("form.family_stat_select.option3")}</option>
                <option value="Вдовец / вдова">{t("form.family_stat_select.option4")}</option>
                <option value="Другое">{t("form.family_stat_select.option5")}</option>
            </select>

            <label style={{ fontSize: "19px" }} htmlFor="isWork">{t("form.is_work_select.label")}</label>
            <select id="isWork" value={isWork} onChange={handleIsWorkChange}>
                <option value="">{t("form.is_work_select.d_option")}</option> 
                <option value="Да">{t("form.is_work_select.option1")}</option>
                <option value="Нет">{t("form.is_work_select.option2")}</option>
            </select>

            <label htmlFor="address">{t("form.kato_type_select.label")}</label>
            <select id="address" value={katoType} onChange={handleKatoChange}>
                <option value="">{t("form.kato_type_select.d_option")}</option> 
                <option value="Областной центр">{t("form.kato_type_select.option1")}</option>
                <option value="Село">{t("form.kato_type_select.option2")}</option>
                <option value="Поселок городского типа">{t("form.kato_type_select.option3")}</option>
            </select>
            <br />
            <p>{t("form.fact_address_text")}</p>
            <label htmlFor="address1">{t("form.fact_address_input.label1")}</label>
            <input
                type="text"
                id="address1"
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                required
                placeholder={t("form.fact_address_input.placeholder1")}
            />
            <label htmlFor="address2">{t("form.fact_address_input.label2")}</label>
            <input
                type="text"
                id="address2"
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                required
                placeholder={t("form.fact_address_input.placeholder2")}
            />

            <label htmlFor="education">{t("form.edu_select.label")}</label>
            <select id="education" value={education} onChange={handleEduChange}>
                <option value="">{t("form.edu_select.d_option")}</option>
                <option value="Незакончил -(а) школу">{t("form.edu_select.option1")}</option>
                <option value="Незаконченное среднее">{t("form.edu_select.option2")}</option>
                <option value="Законченное среднее">{t("form.edu_select.option3")}</option>
                <option value="Среднее специальное">{t("form.edu_select.option4")}</option>
                <option value="Бакалавр">{t("form.edu_select.option5")}</option>
                <option value="Магистратура / докторантура">{t("form.edu_select.option6")}</option>
            </select>

            <label htmlFor="joblessDur">{t("form.jobless_dur_select.label")}</label>
            <select id="joblessDur" value={joblessDur} onChange={handleJoblessChange}>
                <option value="">{t("form.jobless_dur_select.d_option")}</option>
                <option value="До 3 месяцев">{t("form.jobless_dur_select.option1")}</option>
                <option value="До 6 месяцев">{t("form.jobless_dur_select.option2")}</option>
                <option value="До 1 года">{t("form.jobless_dur_select.option3")}</option>
                <option value="До 3 лет">{t("form.jobless_dur_select.option4")}</option>
                <option value="Свыше 3 лет">{t("form.jobless_dur_select.option5")}</option>
            </select>

            <label htmlFor="gosProg">{t("form.gos_prog_select.label")}</label>
            <select id="gosProg" value={gosProg} onChange={handleGosProgChange}>
                <option value="">{t("form.gos_prog_select.d_option")}</option>
                <option value="Zhas Project">ZhasProject</option>
                <option value="С дипломом в село">{t("form.gos_prog_select.option2")}</option>
                <option value="Молодежная практика">{t("form.gos_prog_select.option3")}</option>
                <option value="Жасыл ел">{t("form.gos_prog_select.option4")}</option>
                <option value="Проект «Жасмаман»">{t("form.gos_prog_select.option5")}</option>
                <option value="Мәңгілік ел жастары">{t("form.gos_prog_select.option6")}</option>
                <option value="Болашак">{t("form.gos_prog_select.option7")}</option>
                <option value="Программы поддержки предпринимательства Фонда «Даму»">{t("form.gos_prog_select.option8")}</option>
                <option value="Жаскәсіпкер">{t("form.gos_prog_select.option9")}</option>
                <option value="Бастау бизнес">{t("form.gos_prog_select.option10")}</option>
                <option value="Социальные рабочие места">{t("form.gos_prog_select.option11")}</option>
                <option value="Бесплатное профессионально-техническое образование для всех">{t("form.gos_prog_select.option12")}</option>
                <option value="Другие">{t("form.gos_prog_select.option13")}</option>
                <option value="Не участвовал/а">{t("form.gos_prog_select.option14")}</option>
            </select>

            <br />
            <p>{t("form.other_gos_prog_text")}</p>
            <span className="infoText">{t("form.other_gos_prog_select.label")}</span>
            <input
                type="text"
                id="socialAddress"
                onChange={(e) => setOtherGosProg(e.target.value)}
                value={otherGosProg}
                placeholder={t("form.other_gos_prog_select.placeholder")}
            />

            <label htmlFor="howKnow">{t("form.how_know_select.label")}</label>
            <select id="howKnow" value={howKnow} onChange={handleHowKnowChange}>
                <option value="">{t("form.how_know_select.d_option")}</option>
                <option value="Из социальных сетей">{t("form.how_know_select.option1")}</option>
                <option value="В СМИ (газеты, ТВ, др.)">{t("form.how_know_select.option2")}</option>
                <option value="На информационной встрече в общественной организации, в государственной организации (учебное заведение, МРЦ, акимат, др.)">
                    {t("form.how_know_select.option3")}
                </option>
                <option value="От родственников, друзей, знакомых">{t("form.how_know_select.option4")}</option>
                <option value="С плакатов, афиш, буклетов, др.">{t("form.how_know_select.option5")}</option>
            </select>

            <label htmlFor="isSocial">{t("form.is_social_select.label")}</label>
            <select id="isSocial" value={isSocial} onChange={handleIsSocChange}>
                <option value="">{t("form.is_social_select.d_option")}</option>
                <option value="Да">{t("form.is_social_select.option1")}</option>
                <option value="Нет">{t("form.is_social_select.option2")}</option>
            </select>

            <br />
            <p>{t("form.link_soc_text")}</p>
            <span className="infoText">{t("form.link_soc_input.label")}</span>
            <input
                type="text"
                id="socialAddress"
                onChange={(e) => setSocialAddress(e.target.value)}
                value={socialAddress}
                placeholder={t("form.link_soc_input.placeholder")}
            />

            <br />
            <p>{t("form.contact_pers.title")}</p>
            <span className="infoText">{t("form.contact_pers.info")}</span>

            <label htmlFor="firstName">
                {t("form.contact_pers.f_name")}
            </label>
            <input
                type="text"
                id="firstName"
                onChange={(e) => setFirstNameTrust(e.target.value)}
                value={firstNameTrust}
                required
            />

            <label htmlFor="lastName">
                {t("form.contact_pers.l_name")}
            </label>
            <input
                type="text"
                id="lastName"
                onChange={(e) => setLastNameTrust(e.target.value)}
                value={lastNameTrust}
                required
            />

            <label htmlFor="surname">
                {t("form.contact_pers.surname")}
            </label>
            <input
                type="text"
                id="surname"
                onChange={(e) => setSurnameTrust(e.target.value)}
                value={surnameTrust}
                required
            />
            <label htmlFor="phone">
                {t("form.contact_pers.phone")}
            </label>
            <input
                type="phone"
                id="phone"
                placeholder="8-777-777-7777"
                onChange={(e) => setPhoneTrust(e.target.value)}
                value={phoneTrust}
                required
            />
            <br />
            <label htmlFor="file">
                {t("form.documents.file1_info")}
            </label>
            <div className="file-input">
                <label htmlFor="file-upload">
                    <input
                        id="file-upload"
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleFileChange}
                    />
                    <FontAwesomeIcon className="file" icon={faFileImport}></FontAwesomeIcon>

                </label>
                {selectedFile && <p>{selectedFile.name}</p>}
            </div>
            <label htmlFor="file">
                {t("form.documents.file2_info_1")} <a href="https://egov.kz">Egov</a> {t("form.documents.file2_info_2")}
            </label>
            {/* Input 2 */}
            <div className="file-input">
                <label htmlFor="file-upload1">
                    <input
                        id="file-upload1"
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleFileChange1}
                    />
                    <FontAwesomeIcon className="file" icon={faFileImport}></FontAwesomeIcon>

                </label>
                {selectedFile1 && <p>{selectedFile1.name}</p>}

            </div>
            <label htmlFor="file">
                {t("form.documents.file3_info")}
            </label>
            {/* Input 3 */}
            <div className="file-input">
                <label htmlFor="file-upload2">
                    <input
                        id="file-upload2"
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleFileChange2}
                    />
                    <FontAwesomeIcon className="file" icon={faFileImport}></FontAwesomeIcon>

                </label>
                {selectedFile2 && <p>{selectedFile2.name}</p>}

            </div>
            <label htmlFor="file">
                {t("form.documents.file4_info")}
            </label>
            {/* Input 4 */}
            <div className="file-input">
                <label htmlFor="file-upload3">
                    <input
                        id="file-upload3"
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleFileChange3}
                    />
                    <FontAwesomeIcon className="file" icon={faFileImport}></FontAwesomeIcon>

                </label>
                {selectedFile3 && <p>{selectedFile3.name}</p>}

            </div>

            <div style={{display: "flex", alignItems: "center", marginTop:"30px"}}>
            <h2 style={{marginLeft: "0.01rem", marginRight: "0.4rem", fontSize: "23px"}}>{t("form.documents.download_form")}</h2>
                <a
                    href={formDock}
                    download="Форма проектной заявки"
                    // target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="fileD_form" icon={faFileDownload}></FontAwesomeIcon>
                </a>
            </div>

            <div style={{display: "flex", alignItems: "center", marginTop:"30px"}}>
            <h2 style={{marginLeft: "0.01rem", marginRight: "0.4rem", fontSize: "23px"}}>{t("form.documents.download_form2")}</h2>
                <a
                    href={formDockKaz}
                    download="Жобалық өтінім формасы"
                    // target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="fileD_form" icon={faFileDownload}></FontAwesomeIcon>
                </a>
            </div>

            <label htmlFor="file">
                {t("form.documents.file5_info")}
            </label>
            {/* Input 5 */}
            <div className="file-input">
                <label htmlFor="file-upload4">
                    <input
                        id="file-upload4"
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleFileChange4}
                    />
                    <FontAwesomeIcon className="file" icon={faFileImport}></FontAwesomeIcon>

                </label>
                {selectedFile4 && <p>{selectedFile4.name}</p>}

            </div>
            <br />
            <p id="errmsg" ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <button className='auth_butt' onClick={handleSubmit}>{t("form.send")}</button>
            {/* <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link> */}

            <div className="flexGrow">
                <button className="logout_butt" onClick={logout}>{t("form.log_out")}</button>
            </div>
        </section>
    )
}

export default Form
