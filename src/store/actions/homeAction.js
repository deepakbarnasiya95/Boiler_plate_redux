import { 
    LIST_UPDATE_SUCCESS
 } from '../type'


export function list(data){
    return (dispatch) => {
        // localStorage.setItem('List', JSON.stringify(data));
        dispatch({
            type:LIST_UPDATE_SUCCESS,
            list:data
        })
    }
}