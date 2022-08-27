import React from "react";
import { useNavigate } from "react-router-dom";

function UserWiew() {
  const navigate = useNavigate();
  return (
    <div>
      Kullanıcı Sayfası
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Anasayfaya geri dön
      </button>
    </div>
  );
}

export default UserWiew;
