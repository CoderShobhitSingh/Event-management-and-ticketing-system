import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/CreateEventScreen";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <container>
        <Routes>
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </container>
    </Router>
  );
}
export default App;
