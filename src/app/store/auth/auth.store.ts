import { signal, WritableSignal } from '@angular/core';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

class AuthStore {
  private state: WritableSignal<AuthState> = signal(initialState);

  getState() {
    return this.state();
  }

  // Action to login
  login(user: any) {
    this.state.update((state) => ({
      ...state,
      isAuthenticated: true,
      user,
    }));
  }

  // Action to logout
  logout() {
    this.state.update((state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }));
  }
}

export const authStore = new AuthStore();
