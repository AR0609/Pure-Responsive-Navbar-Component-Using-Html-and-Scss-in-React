import "./App.css";
import Sidenavbarfunctional from "./components/navbar/navbar.js";

function App() {
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pure Responsive Navbar Component Using Html and Scss in React
      </div>

      <div
        className="App"
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>
          <Sidenavbarfunctional />
        </div>
      </div>
    </>
  );
}

export default App;
