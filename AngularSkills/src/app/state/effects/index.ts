import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// This is a placeholder for future effects
// You will expand these as you add features to your application

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
  
  // Sample effect template
  /* 
  loadSomething$ = createEffect(() => this.actions$.pipe(
    ofType('[Source] Action Type'),
    switchMap(() => {
      return this.someService.getSomeData().pipe(
        map(data => ({ type: '[Source] Success Action', payload: data })),
        catchError(error => of({ type: '[Source] Error Action', error }))
      );
    })
  ));
  */
}

// Export all effects here
export const effects = [
  AppEffects
];
