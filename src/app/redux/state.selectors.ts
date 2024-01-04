import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state.model';

export const stateFeatureSelectors =
  createFeatureSelector<AppState>('appState');
export const statePricesSelector = createSelector(
  stateFeatureSelectors,
  (state: AppState) => state.prices
);
