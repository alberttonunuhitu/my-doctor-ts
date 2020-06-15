import {systemReducer} from './system';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  system: systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export * from './system';
export default store;
