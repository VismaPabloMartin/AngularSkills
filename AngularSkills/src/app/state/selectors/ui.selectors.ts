import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from '../reducers/ui.reducer';

export const selectUiState = createFeatureSelector<UiState>('ui');

export const selectDarkMode = createSelector(
  selectUiState,
  (state) => state.darkMode
);

export const selectIsLoading = createSelector(
  selectUiState,
  (state) => state.isLoading
);
