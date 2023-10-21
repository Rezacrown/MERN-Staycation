import './assets/scss/style.scss'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/Landing';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/'  Component={LandingPage} />
        </Routes>
      </BrowserRouter> */}
      <LandingPage />
    </>
  );
}

export default App;
