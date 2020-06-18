export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export interface UserState {
  uid: string;
  fullName: string;
  profession: string;
  email: string;
  photo?: any;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: UserState;
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionTypes = SetUserAction | ClearUserAction;
