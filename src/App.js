import { Header } from './components/Header';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { ThemeContext } from './context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import { useSelector } from 'react-redux/es/exports';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Alert from './components/Alert';

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh',
    width: '100vw'
  }
}))

function App() {
  const { themeApp, theme } = useContext(ThemeContext)
  const [mode, setMode] = useState(themeApp)
  const classes = useStyles()
  const user = useSelector(state => state.user)
  const message = useSelector(state => state.message)


  useEffect(() => {
    setMode(themeApp)
  }, [theme])

console.log(message)

  return (
    <ThemeProvider theme={mode}>
      <div className={classes.app}>
        <Router>
          <Header />
          <Layout>
            {user.token ?
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<User />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              :
              <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<Login/>} />
              </Routes>
            }
            <Alert/>
          </Layout>
        </Router>
        <Layout />
      </div>
    </ThemeProvider>

  );
}

export default App;
