import { NavLink } from "react-router-dom";


function NavBar() {
  return (
      <div>
             <div
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <NavLink
          to="/"
          style={(params) => {
            return params.isActive
              ? { backgroundColor: "red", color: "white" }
              : undefined;
          }}
        >
          Ana Sayfa
        </NavLink>
        <br />
        <NavLink
          style={(params) => {
            return params.isActive
              ? { backgroundColor: "red", color: "white" }
              : undefined;
          }}
          to="/kullanici"
        >
          Kullanıcı
        </NavLink>
        <br />
        <NavLink
          className={(params) => {
            return params.isActive ? "active" : "";
          }}
          to="/parametre/abc-123"
        >
          Parametre Sayfası
        </NavLink>
        <br />
        <NavLink to="/queryparametre?w=1111x1121&w=9999">Query Sayfası</NavLink>
        <br />
        <NavLink to="/haberler">Haberler</NavLink>
        <br />
        <NavLink to="/haberler/sporhaberleri">Spor Haberleri</NavLink>
        <br />
        <NavLink to="/haberler/ekonomihaberleri">Ekonomi Haberleri</NavLink>
      </div>
    </div>
  )
}

export default NavBar