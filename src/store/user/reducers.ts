import {SET_USER, CLEAR_USER, UserState, UserActionTypes} from './types';

const initialState: UserState = {
  uid: 'uid',
  fullName: 'fullName',
  profession: 'profession',
  email: 'email',
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes,
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};
