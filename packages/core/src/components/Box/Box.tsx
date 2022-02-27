import React, { forwardRef } from 'react';
import * as Polymorphic from '../../types/polymorphic';

export const Box = forwardRef((props, ref) => {
  const { as: Element = 'div', ...boxProps } = props;

  return <Element {...boxProps} ref={ref} />;
}) as Polymorphic.ForwardRefComponent<'div'>;

Box.displayName = '@vident-ui/core/Box';
