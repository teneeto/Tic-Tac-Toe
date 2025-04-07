import { useEffect } from 'react';

export function useDelayedCallback(callback: () => void, delay: number, deps: unknown[]) {
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
