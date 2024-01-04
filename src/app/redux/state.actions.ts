import { createAction, props } from '@ngrx/store';
import { STATE_SET_PRICES } from './state.types';

export const stateSetUsers = createAction(
  STATE_SET_PRICES,
  props<{ prices: Array<number> }>()
);
