import { createContext, FC, useState } from "react";
import { ITheme } from "../utils/interface";
import Child from "../Child";

export const ThemeContext= createContext<ITheme | null>(null)
const ThemeComponent: FC = () => {
    const [theme, setTheme]=useState<string>('light')
    return (
            <ThemeContext.Provider value={{theme,setTheme}}>
                <Child/>
            </ThemeContext.Provider>
    )
};
export default ThemeComponent;
