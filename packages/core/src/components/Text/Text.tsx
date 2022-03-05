import React from 'react';

import { Box } from '../Box';
import { tw } from '../../utils';
import type * as Vident from '../../types';

export interface TextOwnProps {
  /** Maps to predefined tailwindcss font sizes  */
  size?: TextSize;

  /** Predefined text colors with dark mode support built in */
  color?: TextColor;

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right' | 'justify';

  /** Link or text variant */
  variant?: 'text' | 'link' | 'gradient';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  //   gradient?: Gradient;

  /** Controls the static css selector base. */
  staticSelector?: string;
}
export type TextProps = React.ComponentProps<typeof Text>;

export type TextSize = keyof typeof classes.sizes;
export type TextColor = keyof typeof classes.colors;

const classes = {
  sizes: {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  },
  colors: {
    gray: 'text-gray-700 dark:text-gray-400',
    primary: 'text-primary-700 dark:text-primary-400',
    secondary: 'text-secondary-700 dark:text-secondary-400',
    success: 'text-success-700 dark:text-success-400',
    warning: 'text-warning-700 dark:text-warning-400',
    error: 'text-error-700 dark:text-error-400',
  },
};

export const Text = React.forwardRef((props, ref) => {
  const {
    size = 'md',
    transform,
    color = 'gray',
    align,
    variant = 'text',
    lineClamp,
    className,
    // gradient = { from: 'blue', to: 'cyan', deg: 45 },
    inline = false,
    inherit = false,

    ...textProps
  } = props;

  return (
    <Box
      {...textProps}
      ref={ref}
      className={tw(classes.sizes?.[size] || '', classes.colors?.[color] || '', className)}
    />
  );
}) as Vident.Polymorphic.ForwardRefComponent<'div', TextOwnProps>;

Text.displayName = '@vident-ui/core/Text';
