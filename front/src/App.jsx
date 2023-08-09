import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Tvshows from './pages/Tvshows';
import MyAccount from './pages/MyAccount';
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<Tvshows />} />
      <Route path="/myaccount" element={<MyAccount />} />
    </Routes>
  </Router>
  )
}

export default App
