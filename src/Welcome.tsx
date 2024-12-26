import { createContext, FC, useState } from "react"
import { ITheme } from "./utils/interface"

interface IWelcomeProps{
    children:React.ReactNode
}

// whenever u have a React Element

export const ThemeContext= createContext<ITheme | undefined>(undefined)

const Welcome:FC<IWelcomeProps>=({children})=>{
    const [theme,setTheme]=useState("light")
    const [token, setToken]=useState("123")
    return (
        <ThemeContext.Provider value={{theme, token}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default Welcome