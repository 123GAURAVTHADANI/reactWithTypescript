import { useState } from "react";

const useCounter=():[number, ()=> void]=>{
        const [counter,setCounter]=useState<number>(0)
        const increment=()=> setCounter((counter)=> counter+3)
        return [counter, increment]
}
export default useCounter;