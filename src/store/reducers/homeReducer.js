import { 
    LIST_UPDATE_SUCCESS
 } from '../type'

export default function (state = {}, action) {

    switch (action.type) {
        case LIST_UPDATE_SUCCESS:
            return { ...state, list: action.list , list_update: true }
        default:
            return state;
    }

}