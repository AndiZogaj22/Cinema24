
import './App.css'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={<Home />}></Route>
          <Route path='/about' Component={<AboutUs />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
