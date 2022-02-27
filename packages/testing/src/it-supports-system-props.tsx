import React from 'react';
import { itSupportsClassName } from './it-supports-classname';
import { itSupportsStyle } from './it-supports-style';
import { itSupportsOthers } from './it-supports-others';
// import { itSupportsCss } from './it-supports-css';
import { itSupportsRef } from './it-supports-ref';

interface Options<T extends React.FC<React.ComponentProps<T>>> {
  component: T;
  props: React.ComponentProps<T>;
  displayName?: string;
  excludeOthers?: boolean;
  refType?: any;
}

export function itSupportsSystemProps<T extends React.FC<React.ComponentProps<T>>>(options: Options<T>) {
  const shouldExcludeOthers = options.excludeOthers || false;

  options.refType && itSupportsRef(options.component, options.props, options.refType);
  !shouldExcludeOthers && itSupportsOthers(options.component, options.props);
  itSupportsClassName(options.component, options.props);
  itSupportsStyle(options.component, options.props);
  // itSupportsCss(options.component, options.props);

  if (options.displayName) {
    it('has correct displayName', () => {
      expect(options.component.displayName).toBe(options.displayName);
    });
  }
}
