import { createReducer, on } from '@ngrx/store';
import { AppState } from './state.model';
import { stateSetPrices } from './state.actions';

export const INITIAL_APP_STATE: AppState = {
  prices: [],
};
export const appReducer = createReducer(
  INITIAL_APP_STATE,
  on(stateSetPrices, (state, { prices }) => {
    return { ...state, prices };
  })
);
