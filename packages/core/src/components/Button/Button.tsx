import React from 'react';

import type * as Vident from '../../types';
import { tw } from '../../utils';
import { Loader } from '../Loader';
import type { LoaderProps } from '../Loader';
export interface ButtonOwnProps {
  /** Used to applied predefined button colors */
  color?: Vident.Color;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right';

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Controls loading state */
  loading?: boolean;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Predefined button size */
  size?: ButtonSize;

  /** Sets text-transform to uppercase */
  uppercase?: boolean;

  /** Controls button appearance */
  variant?: ButtonVariant;
}

export type ButtonProps = React.ComponentProps<typeof Button>;

export type ButtonSize = keyof typeof classes.sizes;
export type ButtonVariant = keyof typeof classes.variants;

export const classes = {
  root: 'relative inline-flex items-center cursor-pointer select-none text-sm font-medium rounded-md focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-primary-600',
  sizes: {
    xs: 'px-2.5 py-1.5 rounded text-xs',
    sm: 'px-3 py-2 leading-4',
    md: 'px-4 py-2',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
  },
  variants: {
    primary: {
      primary: 'text-white bg-primary-600 hover:bg-primary-700',
      secondary: 'text-white bg-secondary-600 hover:bg-secondary-700 ',
      success: 'text-white bg-success-600 hover:bg-success-700 ',
      warning: 'text-white bg-warning-600 hover:bg-warning-700 ',
      error: 'text-white bg-error-600 hover:bg-error-700 ',
    },
    secondary: {
      primary: 'text-primary-700 bg-primary-100 hover:bg-primary-200',
      secondary: 'text-secondary-700 bg-secondary-100 hover:bg-secondary-200 ',
      success: 'text-success-700 bg-success-100 hover:bg-success-200 ',
      warning: 'text-warning-700 bg-warning-100 hover:bg-warning-200 ',
      error: 'text-error-700 bg-error-100 hover:bg-error-200 ',
    },
    white: 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50',
  },
  states: {
    loading: 'pointer-events-none opacity-50',
    disabled: 'border-transparent bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200',
  },
};

export const Button = React.forwardRef((props, ref) => {
  const {
    as: Element = 'button',
    color = 'primary',
    type = 'button',
    size = 'md',
    variant = 'primary',
    disabled = false,
    loading = false,
    loaderPosition = 'left',
    uppercase = false,
    loaderProps,
    children,
    className,
    style,
    leftIcon,
    rightIcon,
    ...buttonProps
  } = props;

  const variantClass =
    variant === 'white' ? classes.variants.white : classes.variants[variant][color];

  const loader = (
    <Loader
      {...loaderProps}
      className={tw(
        loaderPosition === 'left' ? 'mr-2' : 'ml-2',
        'w-5 text-white',
        loaderProps?.className
      )}
    />
  );

  return (
    <Element
      {...buttonProps}
      className={tw(
        variantClass,
        loading && classes.states.loading,
        classes.root,
        disabled && classes.states.disabled,
        classes.sizes[size],
        variant !== 'secondary' && 'shadow-sm',
        className
      )}
      ref={ref}
      type={type}
      disabled={disabled || loading}
    >
      {loading && loaderPosition === 'left' && <span>{loader}</span>}
      <span style={{ textTransform: uppercase ? 'uppercase' : undefined }}>{children}</span>
      {loading && loaderPosition === 'right' && <span>{loader}</span>}
    </Element>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'button', ButtonOwnProps>;

Button.displayName = '@vident-ui/core/Button';
