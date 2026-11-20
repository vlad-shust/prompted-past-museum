import { env } from '@/lib/env';
import { useAppStore } from '@/stores/app.store';

/** The key exists in dev clients and keyless demo builds; a keyed release never offers it. */
export const ADMIN_AVAILABLE = __DEV__ || env.dataMode === 'mock';

/** True when the curator's key is turned: every room open, no daily gate. */
export function useAdminMode(): boolean {
  const adminMode = useAppStore((state) => state.adminMode);
  return ADMIN_AVAILABLE && adminMode;
}
