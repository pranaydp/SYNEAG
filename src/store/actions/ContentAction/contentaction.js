import {
    CONTENT_SUCCESS,
    CONTENT_ERROR,
  } from "../../actiontype/actiontypes"; 
 
export const contentDetails = () => {
    return async (dispatch) => {
        debugger
        try {
            const res = await fetch("http://localhost:5000/projectlist");
            const data = await res.json();
 
            dispatch({ type: CONTENT_SUCCESS, payload: data });
        } catch (err) {
            dispatch({ type: CONTENT_ERROR, payload: err });
        }
    };
}