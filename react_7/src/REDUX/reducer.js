import * as actionTypes from "./actionTypes";

export const Reducer =(state={
    count:0,
    
},action)=>{
//increment
switch(action.type){
    case actionTypes.INCREMENT:
        var addCount = state.count
        addCount++;
    return {...state,count:addCount}
    case actionTypes.DECREMENT:
        var decCount=state.count;
        decCount--;
        return {...state,count:decCount}
    

default:
    return state;

}

}