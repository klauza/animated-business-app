import { SET_PAGE_LOAD } from '../actions/types';

const initialState = {
  pageLoaded: {
    home: false,
    about: false,
    portfolio: false,
    github: false
  }
  
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_PAGE_LOAD:
      return{
        ...state,
        pageLoaded: action.payload
      }
    default:
      return state;
  }
}