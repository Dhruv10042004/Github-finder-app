import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from  './components/pages/Home'
import About from './components/pages/About'
import User from './components/pages/User'
import NotFound from './components/pages/NotFound'
import Alert from './components/layout/Alert'
import { GithubProvider } from './context/Github/GithubContext'
import { AlertProvider } from './context/Alert/AlertContext'
function App() {
  return (
    <>
    <GithubProvider>   <AlertProvider>  <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          
          <main className="container mx-auto px-3">
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router></AlertProvider> </GithubProvider>

    </>
  )
}

export default App
