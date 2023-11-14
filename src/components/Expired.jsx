import React from 'react';
import { useNavigate } from "react-router-dom";

const Expired = () => {

    const navigate = useNavigate();

    const HandleExpired = () => {
        navigate('/');
        window.location.reload();
      };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h4 style={{ color: 'black', marginTop: '40px', textAlign: 'center' }}>
        Данная ссылка не действительна, попробуйте зарегистрироваться заново
        </h4>
        <button onClick={HandleExpired} style={{border: "none", backgroundColor: "#125599", color: "#fff", width: "25%" , cursor: "pointer"}}>Главная</button>
    </div>
  );
};

export default Expired;
