import * as actionTypes from './actionTypes' 
import {db} from '../firebase'

export const saveTodo =(todo)=>(dispatch)=>{
    db.push(todo)

    return dispatch({
        type:actionTypes.SAVE_TODO,
    })
}