import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterScreen from './pages/CreateEventScreen';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterScreen />} />
      </Routes>
    </Router>
  )
}
export default App
