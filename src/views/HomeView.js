import React from 'react'
import { useNavigate } from 'react-router-dom';


function HomeView() {
    const navigate = useNavigate();
  return (
      <div>Ana Sayfa
            <br />
      <button
        onClick={() => {
          navigate("/kullanici");
        }}
      >
        Kullanıcı sayfasına geç
      </button>
    </div>
  )
}

export default HomeView