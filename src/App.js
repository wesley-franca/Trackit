import LoginPage from "./login&Registration/LoginPage.js";
import RegistrationPage from "./login&Registration/RegistrationPage.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />

      </Routes>
    </BrowserRouter>
  )
}



export default App;

