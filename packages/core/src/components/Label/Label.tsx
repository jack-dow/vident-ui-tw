import React, { forwardRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Box } from '../Box';
import { tw } from '../../utils';
import type * as Vident from '../../types';

const classes = {
  unstyled: '',
  default: 'block text-sm font-medium text-gray-700 dark:text-gray-400 select-none cursor-text',
};

export type LabelVariant = keyof typeof classes;

export interface LabelOwnProps {
  /** Controls Switch appearance */
  variant?: LabelVariant;

  /** Control the type of label that is rendered */
  type?: 'radix' | 'native';
}

export type LabelProps = Vident.Merge<LabelPrimitive.LabelProps, LabelOwnProps>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { variant = 'default', type = 'radix', className, ...labelProps } = props;

  return (
    <Box
      as={type === 'radix' ? LabelPrimitive.Root : 'label'}
      {...labelProps}
      ref={ref}
      className={tw(classes[variant], className)}
    />
  );
});

Label.displayName = '@vident-ui/core/Label';
