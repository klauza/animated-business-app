import { SET_PAGE_LOAD } from './types';

export const pageLoad = (data) => async dispatch => {
  dispatch({
    type: SET_PAGE_LOAD,
    payload: data
  })
}