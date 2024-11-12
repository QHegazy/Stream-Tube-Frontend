import { createAction, props } from '@ngrx/store';
import { Signup } from '../types/signup';

export const signupRequest = createAction(
  '[Auth] Signup Request',
  props<{ signup: Signup }>()
);

export const signupSuccess = createAction(
  '[Auth] Signup Success',
  props<{ user: any }>() 
);

export const signupFailure = createAction(
  '[Auth] Signup Failure',
  props<{ error: string }>()
);
