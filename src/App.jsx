import React from 'react'
import Navbar from './components/common/Navbar'
import Hero from './pages/Hero'
import Footer from './components/common/Footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return <>
     <BrowserRouter>
          <Routes>
          <Route path='/' element={<><Navbar /> <Outlet/> <Footer /> </>}>
          <Route index element={<><Hero /></>} />
          <Route path='/categories' element={<><Category /></>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/register' element={<><Register /></>} />
          </Route>
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
    

  </>
}

export default App
