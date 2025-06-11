import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterScreen from './pages/CreateEventScreen';
import HomeScreen from './pages/HomeScreen'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}
export default App
