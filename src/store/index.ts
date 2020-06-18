import {systemReducer} from './system';
import {userReducer} from './user';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export * from './system';
export * from './user';
export default store;
