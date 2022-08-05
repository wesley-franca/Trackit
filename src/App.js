import LoginPage from "./login&Registration/LoginPage.js";
import RegistrationPage from "./login&Registration/RegistrationPage.js";
import TodayPage from "./TodayPage.js"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/hoje" element={<TodayPage />} />

      </Routes>
    </BrowserRouter>
  )
}



export default App;

