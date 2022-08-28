import "./App.css";
import { Routes, Route, Link,NavLink } from "react-router-dom";
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
        <NavLink to="/" style={({isActive}) => isActive?{backgroundColor:"red":undefined}} >Ana Sayfa</NavLink>
        <br />
        <NavLink to="/kullanici">Kullanıcı</NavLink>
        <br />
        <NavLink to="/parametre/abc-123">Parametre Sayfası</NavLink>
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
          <Route path="/" element={<HomeView />} />
          <Route path="/kullanici" element={<UserWiew />} />
          <Route path="/parametre/:id" element={<ParametreView />} />
          <Route path="/queryparametre" element={<QueryParamsViews />} />

          <Route path="/haberler" element={<NewView />}>
            <Route
              index
              element={<div>Lütfen bir haber kategorisi seçin</div>}
            />
            <Route path="sporhaberleri" element={<SportsNewsView />} />
            <Route path="ekonomihaberleri" element={<EconomyNewsView />}>
              <Route
                index
                element={<div>Ekonomi haberleri numarası seç</div>}
              />
              <Route path=":id" element={<EconomyNewsView />} />
            </Route>
          </Route>
          <Route path="*" element={<div>404 Not Found!!!</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
