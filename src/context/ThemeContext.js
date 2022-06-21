import { useEffect } from "react"
import { createContext, useState } from "react"


const ThemeContext = createContext()

const themeLight = {
    backgroud: '#fff',
    text: '#000000',
}

const themeDark = {
    backgroud: '#000000',
    text:'#fff'
}

const ThemeAppProvider = ({ children }) => {
    const [theme, setTheme] = useState(themeLight)
    const [changeTheme, setChangeTheme] = useState(1)


    useEffect(()=>{
        changeTheme === 1 ?  setTheme(themeLight) : setTheme(themeDark)
    },[changeTheme])

    const handleChange = () =>{
        changeTheme === 1? setChangeTheme(2) : setChangeTheme(1)
    }


    const data = { theme, changeTheme, handleChange }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeAppProvider }