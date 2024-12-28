import { ICartObject } from "../Reducer/cartReducer"

// action types
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"

export interface IADD_TO_CART{
    type:typeof ADD_TO_CART,
    payload:ICartObject
}
export interface IREMOVE_FROM_CART{
    type:typeof REMOVE_FROM_CART,
    payload:number
}

export type CARTACTION=IADD_TO_CART | IREMOVE_FROM_CART