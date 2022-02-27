import { useLayoutEffect, useEffect } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
export const useIsomorphicEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
