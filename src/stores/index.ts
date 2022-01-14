import { combineReducers } from 'redux';

import { placesReducer } from './placesStore/reducer';
import { menuStore } from './menuStore/reducer';

export const rootReducer = combineReducers({ places: placesReducer, menu: menuStore });

export type RootStateType = ReturnType<typeof rootReducer>;

export type ActionType<T> = {
  type: string;
  payload: T;
};
