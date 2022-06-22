import { ThemeContext } from './context/ThemeContext'
import { useContext, useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import { useSelector } from 'react-redux/es/exports'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import Sidebar from './components/Sidebar'
import Notes from './pages/Notes'




function App() {
  const { theme } = useContext(ThemeContext)
  const admin = useSelector(state => state.admin)


  return (

    <div className='app' style={{
      backgroundColor: theme.background
    }}>
      <Router>
        {admin.token ?
        
            <Layout theme={theme}>
              <Sidebar theme={theme} />
              <Routes>
                <Route path='/usuarios' element={<Home />} />
                <Route path='/notes' element={<Notes />} />
                <Route path='/user/:id' element={<User />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Layout>
          :
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Login />} />
          </Routes>
        }
    </Router>
    </div >


  );
}

export default App;
