import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/CreateEventScreen";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin"
function App() {
  return (
    <Router>
      <Navbar />
      <main>
          <Routes>
            <Route path="/" element={<RegisterScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
      </main>
    </Router>
  );
}
export default App;