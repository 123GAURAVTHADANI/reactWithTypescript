import { CARTACTION } from "../Actions/action"

export interface ICartObject{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
}
interface ICartReducer{
    cart:ICartObject[]
}
const initialState:ICartReducer={
    cart:[]
}
function cartReducer(state=initialState, action:CARTACTION){
    switch(action.type){
        case 'ADD_TO_CART':
                return{...state, cart:[...state.cart,action.payload]}
        case 'REMOVE_FROM_CART':
                return {...state,cart:state.cart.filter((item)=> item.id!==action.payload)}  
                
        default: return state        
    }

}
export default cartReducer