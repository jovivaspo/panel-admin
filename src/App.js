import { Header } from './components/Header';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { ThemeContext } from './context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import {Layout} from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import User from './pages/User';
import { useSelector } from 'react-redux/es/exports';

const useStyles = makeStyles((theme)=>({
  app:{
    height: '100vh',
    width: '100vw'
  }
}))

function App() {
  const { themeApp, theme } = useContext(ThemeContext)
  const [mode, setMode] = useState(themeApp)
  const classes = useStyles()
  const user = useSelector(state => state.user)

  useEffect(()=>{
    setMode(themeApp)
  },[theme])



  return (
    <ThemeProvider theme={mode}>
      <div className={classes.app}>
        <Router>
        <Header />
        <Layout>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/user' element={<User/>}/>
          </Routes>
        </Layout>
        </Router>
        <Layout/>
      </div>
    </ThemeProvider>

  );
}

export default App;
