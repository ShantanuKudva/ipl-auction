import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LoginForm from "./pages/Login"; // Import your LoginForm component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />{" "}
        {/* Define login route */}
      </Routes>
    </Router>
  );
}

export default App;
