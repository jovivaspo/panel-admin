import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'
import { Layout } from './components/Layout'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import { useSelector } from 'react-redux/es/exports'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import Sidebar from './components/Sidebar'
import Notes from './pages/Notes'
import Alert from './components/Alert'




function App() {
  const { theme } = useContext(ThemeContext)
  const admin = useSelector(state => state.admin)
  const message = useSelector(state => state.message)

console.log(message)
console.log(admin)

  return (

    <div className='app' style={{
      backgroundColor: admin.token ? theme.background : '#fff'
    }}>
      <Router>
        {admin.token ?
          <Layout theme={theme}>
            <Sidebar theme={theme} />
            <Routes>
              <Route path='/usuarios' element={<Home />} />
              <Route path='/notas' element={<Notes />} />
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
      {message.message && <Alert/>}
    </div >


  );
}

export default App;
