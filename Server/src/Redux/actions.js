import { ADD_FAV, REMOVE_FAV} from './action-type'

export const addFav =(payload) => {
    return {
        type:  ADD_FAV,
        payload
    }
}

export const removeFav =(id) => {
    return {
        type:  REMOVE_FAV,
        payload: id
    }
}


/*
COMPONENTE CARD
import {addFav}
addFav(5)
ACTION ----> reducer --->  {type: ADD_FAV, payload: 5}
REDUCER--->  state{ favorite: [5]}

*/