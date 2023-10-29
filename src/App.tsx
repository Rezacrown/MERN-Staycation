import "./assets/scss/style.scss";
// import "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import DetailPage from "./pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/detail" Component={DetailPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
