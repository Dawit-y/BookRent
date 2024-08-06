import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignupOwner from "./pages/SignupOwner";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignupOwner />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
