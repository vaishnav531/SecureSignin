import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

function ForgotPassword() {
  return <div className="flex items-center justify-center h-screen">Forgot Password Page</div>;
}

function SignUp() {
  return <div className="flex items-center justify-center h-screen">Sign Up Page</div>;
}

export default App;
