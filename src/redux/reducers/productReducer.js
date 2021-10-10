import { ActionTypes } from "../constants/action-types"

const initialState = {
    produts:[{
        id:1,
        title:"Reuben",
        category: "UI dev"
    }]
}

export const productReducer = (state = initialState,{type,payload}) => {
    switch(type){
       case ActionTypes.SET_PRODUCTS:
           return state
        
        default:
            return state;

    }
}