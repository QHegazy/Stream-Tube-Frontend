import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

// Define User interface
export interface User {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  // Add other user properties as needed
}

export interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

export const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.signupRequest,
    (state): AuthState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    AuthActions.signupSuccess,
    (state, { user }): AuthState => ({
      ...state,
      loading: false,
      user,
    })
  ),
  on(
    AuthActions.signupFailure,
    (state, { error }): AuthState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
