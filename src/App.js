import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import UserWiew from "./views/UserWiew";
import ParametreView from "./views/ParametreView";
import QueryParamsViews from "./views/QueryParamsViews";

function App() {
  return (
    <div className="App">
      <Link to="/">Ana Sayfa</Link>
      {" "}
      <Link to="/kullanici">Kullanıcı</Link>
      {" "}
      <Link to="/parametre/abc-123">Parametre Sayfası</Link>
      {" "}
      <Link to="/queryparametre?w=1111x1121&w=9999">Query Sayfası</Link>


      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/kullanici" element={<UserWiew />} />
        <Route path="/parametre/:id" element={<ParametreView/>} />
        <Route path="/queryparametre" element={<QueryParamsViews/>} />
      </Routes>
    </div>
  );
}

export default App;
