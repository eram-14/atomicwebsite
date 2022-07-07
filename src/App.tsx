import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
