import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
