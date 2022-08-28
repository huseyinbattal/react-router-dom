import "./App.css";
import Router from "./router/Router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
   <NavBar/>

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
        <Router />
      </div>
    </div>
  );
}

export default App;
