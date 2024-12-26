import { useContext } from "react"
import { ThemeContext } from "./Welcome"
import { ITheme } from "./utils/interface"

function Child(){
    const {theme} = useContext(ThemeContext) as ITheme
    return <h1>I am having{theme}</h1>
}
export default Child