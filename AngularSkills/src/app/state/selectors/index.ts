import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { selectDarkMode, selectIsLoading } from './ui.selectors';

// Export all selectors here for easy access across the application
export {
  selectDarkMode,
  selectIsLoading
};
