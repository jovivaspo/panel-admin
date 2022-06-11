import { Header } from './components/Header';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { ThemeContext } from './context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import {Layout} from './components/Layout';

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

  useEffect(()=>{
    setMode(themeApp)
  },[theme])



  return (
    <ThemeProvider theme={mode}>
      <div className={classes.app}>
        <Header />
        <Layout/>
      </div>
    </ThemeProvider>

  );
}

export default App;
