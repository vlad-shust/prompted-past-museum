import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { isoDay } from '@/utils/dates';

function msUntilMidnight(now: Date) {
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime() + 1000;
}

/** The local date as state: the compiler freezes a bare `new Date()` for the life of a mounted screen. */
export function useToday(): Date {
  const [today, setToday] = useState(() => new Date());

  useEffect(() => {
    const refresh = () => {
      setToday((current) => (isoDay(current) === isoDay(new Date()) ? current : new Date()));
    };
    const subscription = AppState.addEventListener('change', (status) => {
      if (status === 'active') refresh();
    });
    const timer = setTimeout(refresh, msUntilMidnight(today));
    return () => {
      subscription.remove();
      clearTimeout(timer);
    };
  }, [today]);

  return today;
}
