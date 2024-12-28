import { useContext, useEffect, useState } from "react"
import { ITheme } from "./utils/interface"
import { ThemeContext } from "./ThemeComponent/ThemeComponent"
import useCounter from "./Hooks/useCounter"
import axios from "axios"
import { ICartObject } from "./Reducer/cartReducer"
import { useDispatch } from "react-redux"
import { ADD_TO_CART } from "./Actions/action"

function Child(){
    const themeValue=useContext(ThemeContext)
    const [count, setCount]=useCounter();
    const [products,setProducts]=useState<ICartObject[] | []>([])
    const {theme,setTheme} = themeValue as any;
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>setProducts(res.data))
    },[])
    const handleTheme=()=>{
        if(theme=="light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    const handleAddtoCart=(event:React.MouseEvent<HTMLButtonElement>,item:ICartObject)=>{
            dispatch({type:ADD_TO_CART,payload:item})
    }
    
    return (
        <div style={{backgroundColor:theme==="light"?"white":"black"}}>
            Hello World!!
            <h1>{count}</h1>
            {products && products.map((item,index)=>{
                return (
                    <div key={item.id+index}>
                        <h1>{item.title}</h1>
                        <img src={item.image} width={200} alt={item.title}/>
                        <div>
                            <button onClick={(event)=>handleAddtoCart(event,item)}>Add to Cart</button>
                            <button>Remove from Cart</button>
                       </div>
                    </div>  
                )
            })}
            <button onClick={handleTheme}>Toggle Theme</button>
            <button onClick={setCount}>Increment</button>
        </div>
    )
}
export default Child