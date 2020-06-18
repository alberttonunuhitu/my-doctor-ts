import {SET_USER, CLEAR_USER, UserState, UserActionTypes} from './types';

export const setUser = (user: UserState): UserActionTypes => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const clearUser = (): UserActionTypes => {
  return {
    type: CLEAR_USER,
  };
};
