import { ACTIVE_BOOK } from "../constants";

export default function activeBookReducer( state = {}, action ){
    switch(action.type){
        case ACTIVE_BOOK:
            return action.payload
        default:
            return state
    }
}