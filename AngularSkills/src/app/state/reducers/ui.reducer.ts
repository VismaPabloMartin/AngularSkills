import { createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions';

export interface UiState {
  darkMode: boolean;
  isLoading: boolean;
}

export const initialUiState: UiState = {
  darkMode: false, // Default to light theme
  isLoading: false,
};

export const uiReducer = createReducer(
  initialUiState,
  on(UiActions.toggleDarkMode, (state) => ({
    ...state,
    darkMode: !state.darkMode,
  })),
  on(UiActions.setLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  }))
);
