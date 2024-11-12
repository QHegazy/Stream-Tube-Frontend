import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { environment } from '../../environments/environment.development';

@Injectable()
export class AuthEffects {
  private http = inject(HttpClient);
  private apiUserData = `${environment.apiURL}/register`;
  constructor(private actions$: Actions) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signupRequest),
      switchMap(({ signup }) => {
        return this.http.post(this.apiUserData, signup).pipe(
          map((user) => AuthActions.signupSuccess({ user })), // Success action
          catchError(
            async (error) => AuthActions.signupFailure({ error: error.message }) 
          )
        );
      })
    )
  );
}
