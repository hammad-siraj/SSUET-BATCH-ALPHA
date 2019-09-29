import {createStore,combineReducers,applyMiddleware} from 'redux'
import { Reducer } from './reducer'
import thunk from 'redux-thunk'



export const configureStore =()=>{
    const store =createStore(combineReducers({
        TODOS:Reducer
    }),applyMiddleware(thunk))
    return store
}