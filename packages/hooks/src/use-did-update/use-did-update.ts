import { useEffect, useRef, DependencyList, EffectCallback } from 'react';

export function useDidUpdate(fn: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
