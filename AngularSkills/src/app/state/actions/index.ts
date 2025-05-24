import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Example of action group for UI state
export const UiActions = createActionGroup({
  source: 'UI',
  events: {
    'Toggle Dark Mode': emptyProps(),
    'Set Loading': props<{ isLoading: boolean }>(),
  }
});

// Example of action group for auth
export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login': props<{ username: string; password: string }>(),
    'Login Success': props<{ user: any }>(),
    'Login Failure': props<{ error: any }>(),
    'Logout': emptyProps(),
  }
});

// Additional action groups can be defined here as the application grows
