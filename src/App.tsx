import React, { createContext, FC, useEffect, useState } from 'react'
import './App.css'
import Welcome from './Welcome';
import Child from './Child';
import { IProps, ITodo } from './utils/interface';




// {title:string, address:{floor:number}, id:number}
// numbers[] = []

// verify the object body(structure)

// typeof props (object)
// const <nameOFFC>:FC<IProps>





const App:FC<IProps>=({name, age})=> {
  const [todos,setTodos]=useState<ITodo[] | []>([])


  // Type annotation 
  // const [count, setCount] = useState<boolean>(false)

  // useEffect(()=>{
  //   setCount(true)
  // },[])

  // Type Inference 
   //const [count, setCount] = useState(0)
    // let string_input:string="PW SKILLS"
    // let string_input="PW SKills"
    // string_input=0

  const handleInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(">>", event.target.value)
  }

  const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
    console.log("Btn is clicked!!")
  }
  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
  }
  const handleKeyboard=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        console.log(event.key)
  }
  // any -> Bypass

  return (
    <>
     <h1>{name}{age}</h1>
     
     {/*handling your theme */}
     <Welcome>
            {/* <Child/> */}
    </Welcome>
    
    </>
  )
}

export default App


    // <h1>{name}{age}</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input type='text' placeholder='Username' onChange={handleInput} />
    //         <input type='text' placeholder='Password'/>
    //         <button type='submit' >CLick Me</button>
    //       </form>
          {/* trigger when u press it */}
          {/* <input type='Check Input' onKeyDown={handleKeyboard} /> */} 

          