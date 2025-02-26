import { useCallback, useEffect, useRef, type MutableRefObject } from 'react';
import { useLatest } from './useLatest';

export const useDebounce = <T>(callback: (...args: T[]) => void, delay: number) => {
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const callbackLatest = useLatest(callback);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);

  return useCallback(
    (...args: T[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        callbackLatest.current(...args);
      }, delay);
    },
    [callbackLatest, delay],
  );
};
