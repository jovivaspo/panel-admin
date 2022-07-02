import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import { useSelector } from 'react-redux/es/exports'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import Notes from './pages/Notes'
import Alert from './components/Alert'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  const message = useSelector(state => state.message)
  return (
    <>
     <Router>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>} />
              <Route path='/usuarios' element={<PrivateRoutes><Home /></PrivateRoutes>} />
              <Route path='/notas' element={<PrivateRoutes><Notes /></PrivateRoutes>} />
              <Route path='/user/:id' element={<PrivateRoutes><User /></PrivateRoutes>} />
              <Route path='*' element={<PrivateRoutes> <NotFound /></PrivateRoutes>} />
            </Routes>
      </Router>
      {message.message && <Alert />}
    </>
  );
}

export default App;
