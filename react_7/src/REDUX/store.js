import {createStore,combineReducers} from "redux"
import { Reducer } from "./reducer";


export const configureStore =()=>{
    const store =createStore(
        combineReducers({
            myCount:Reducer
        })
    )
    return store;
}