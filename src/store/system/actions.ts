import {SET_LOADING, SystemActionTypes} from './types';

export function setLoading(loading: boolean): SystemActionTypes {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}
