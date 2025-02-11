import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Login from './pages/Login';
import Register from './pages/Register';
// import { Layout } from './components/Layout';
import { Homepage } from './pages/Homepage'
import { Write } from './pages/Write'
import Single from './pages/Single'
import Editpage from './pages/Editpage';
import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/nav' element={< Navbar/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/edit' element={<Editpage />} />
        <Route path='/write' element={<Write />} />
        <Route path='/single' element={<Single />} />
      </Routes>
      {/* <Footer /> */}
    </Router>

  </StrictMode>,
)

