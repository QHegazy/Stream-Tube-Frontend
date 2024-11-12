import { authStore } from './auth.store';

export const isAuthenticatedSelector = () =>
  authStore.getState().isAuthenticated;
export const userSelector = () => authStore.getState().user;
