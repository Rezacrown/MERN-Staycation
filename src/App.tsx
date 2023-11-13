import "./assets/scss/style.scss";
// import "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import DetailPage from "./pages/Detail";
import CheckoutPage from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/properties/:id" Component={DetailPage} />
          <Route path="/checkout" Component={CheckoutPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
