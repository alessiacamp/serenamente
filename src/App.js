import "./App.css";
import Login from "./components/LoginScreen/Login";
import RegistratiUtente from "./components/RegistratiUtente/RegistratiUtente";
import RegistratiCandidato from "./components/RegistratiCandidato/RegistratiCandidato";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrati-utente" element={<RegistratiUtente />} />
        <Route path="/registrati-volontario" element={<RegistratiCandidato />} />
        <Route path="/home" element={<Dashboard />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
