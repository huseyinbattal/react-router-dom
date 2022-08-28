import "./App.css";
import { Routes, Route,NavLink,Navigate } from "react-router-dom";
import HomeView from "./views/HomeView";
import UserWiew from "./views/UserWiew";
import ParametreView from "./views/ParametreView";
import QueryParamsViews from "./views/QueryParamsViews";
import NewView from "./views/NewView";
import SportsNewsView from "./views/SportsNewsView";
import EconomyNewsView from "./views/EconomyNewsView";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          borderRadius: "30px",
          margin: "10px",
        }}
      >
        <NavLink to="/" style={(params) => {
          return params.isActive ? { backgroundColor: "red",color:"white" } : undefined;
        }} >Ana Sayfa</NavLink>
        <br />
        <NavLink  style={(params) => {
          return params.isActive ? { backgroundColor: "red",color:"white" } : undefined;
        }}  to="/kullanici">Kullanıcı</NavLink>
        <br />
        <NavLink className={(params) => {
          return params.isActive?"active":""
        }} to="/parametre/abc-123">Parametre Sayfası</NavLink>
        <br />
        <NavLink to="/queryparametre?w=1111x1121&w=9999">Query Sayfası</NavLink>
        <br />
        <NavLink to="/haberler">Haberler</NavLink>
        <br />
        <NavLink to="/haberler/sporhaberleri">Spor Haberleri</NavLink>
        <br />
        <NavLink to="/haberler/ekonomihaberleri">Ekonomi Haberleri</NavLink>
      </div>

      <hr />

      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          color: "red",
          borderRadius: "50px",
          margin: "10px",
        }}
      >
        <Routes>
  

        
            
              <Route path=":id" element={<EconomyNewsView />} />
    
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
