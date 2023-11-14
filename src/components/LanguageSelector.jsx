import React, {useState} from "react";
import i18n from "../i18n";

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
    
    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return(
        <select className="lang-selector" defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="kz">KZ</option>
            <option value="ru">RU</option>
            <option value="en">ENG</option>
        </select>
    );

};

export default LanguageSelector