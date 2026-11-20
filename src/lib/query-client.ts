import { QueryClient, focusManager } from '@tanstack/react-query';
import { AppState } from 'react-native';
import type { AppStateStatus } from 'react-native';

// React Native has no window-focus events, so TanStack Query never refetches
// on resume unless focus is driven from AppState. Without this, a scene fetched
// before a background never revalidates while the process lives.
focusManager.setEventListener((handleFocus) => {
  const subscription = AppState.addEventListener('change', (status: AppStateStatus) => {
    handleFocus(status === 'active');
  });
  return () => subscription.remove();
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60_000,
      gcTime: 24 * 60 * 60 * 1_000,
      refetchOnWindowFocus: true,
    },
  },
});
