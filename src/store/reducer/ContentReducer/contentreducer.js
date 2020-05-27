import {
    CONTENT_SUCCESS,
    CONTENT_REQUEST,
    CONTENT_ERROR,
  } from "../../actiontype/actiontypes";

  const initialState = {
   myproject:null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
     
      case CONTENT_SUCCESS:
        debugger
        return { ...state, myproject: action.payload };
      case CONTENT_ERROR:
        return { ...state, settingsData: action.settingsDetails };
      default:
        return state;
    }
  };
  