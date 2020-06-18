import {SET_LOADING, SystemState, SystemActionTypes} from './types';

const initialState: SystemState = {
  loading: false,
};

export function systemReducer(
  state: SystemState = initialState,
  action: SystemActionTypes,
) {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
}
