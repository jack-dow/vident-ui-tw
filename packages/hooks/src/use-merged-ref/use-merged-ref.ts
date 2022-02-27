import React, { useCallback } from 'react';
import { assignRef } from '../utils';

export function useMergedRef<T = any>(...refs: React.ForwardedRef<T>[]) {
  return useCallback((node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  }, refs);
}

export function mergeRefs<T = any>(...refs: React.ForwardedRef<T>[]) {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
