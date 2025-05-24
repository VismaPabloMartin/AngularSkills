import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { isDevMode } from '@angular/core';
import { UiState, uiReducer } from './ui.reducer';

// Define the state structure
export interface State {
  // Add specific state slices here as needed
  ui: UiState;
}

// Initial state
export const initialState: State = {
  // Initialize state slices here
};

// Combine all reducers
export const reducers: ActionReducerMap<State> = {
  // Add reducers here
  ui: uiReducer,
};

// Meta-reducers for debugging in development
export const metaReducers: MetaReducer<State>[] = isDevMode() 
  ? [logger]
  : [];

// Simple logger meta-reducer for development
export function logger(reducer: any): any {
  return function(state: any, action: any): any {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}
