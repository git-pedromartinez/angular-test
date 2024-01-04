import { createReducer, on } from '@ngrx/store';
import { AppState } from './state.model';
import { stateSetUsers } from './state.actions';

export const INITIAL_APP_STATE: AppState = {
  prices: [],
};
export const appReducer = createReducer(
  INITIAL_APP_STATE,
  on(stateSetUsers, (state, { prices }) => {
    return { ...state, prices };
  })
);
