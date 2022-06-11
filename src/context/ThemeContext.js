import { createContext, useState } from "react"
import { createTheme } from '@material-ui/core/styles'

const ThemeContext = createContext()

const ThemeAppProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const handleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }


    const themeApp = createTheme({
        palette: {
            primary: {
                main: theme === "light" ? "#33c9dc" : "#333333",
                contrastText: '#fff',
            },

            secondary: {
                main: theme === "light" ? "#fff" : "#5b5b5b",
                contrastText: '#fff',
            },
            text:{
                primary:theme === "light" ? "#black" : "#fff",
            }
        }
    })


    const data = { theme, setTheme, handleTheme, themeApp }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeAppProvider }