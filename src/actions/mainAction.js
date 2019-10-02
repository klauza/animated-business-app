import { SET_PAGE_LOAD } from './types';

export const pageLoad = (data) => async dispatch => {

  console.log(data);

  dispatch({
    type: SET_PAGE_LOAD,
    payload: data
  })
}