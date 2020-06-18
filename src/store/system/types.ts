export const SET_LOADING = 'SET_LOADING';

export interface SystemState {
  loading?: boolean;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type SystemActionTypes = SetLoadingAction;
