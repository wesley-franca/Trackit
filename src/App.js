import LoginPage from "./Login&Registration/LoginPage.js";
import RegistrationPage from "./Login&Registration/RegistrationPage.js";
import TodayPage from "./Content/TodayPage.js"
import HabitPage from "./Content/HabitPage.js"
import HistoryPage from "./Content/HistoryPage.js"
import Context from './tools/Context.js';

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css"

function App() {
  const [profile, setProfile] = useState({});  
  return (
    <Context.Provider value={[profile, setProfile]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}



export default App;

