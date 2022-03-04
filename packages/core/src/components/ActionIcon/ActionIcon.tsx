import React, { forwardRef } from 'react';

import { tw } from '../../utils';
import { Loader } from '../Loader';

import type * as Vident from '../../types';
import type { LoaderProps } from '../Loader';

export interface ActionIconOwnProps {
  /** Controls ActionIcon appearance */
  variant?: ActionIconVariant;

  /** ActionIcon hover, active and icon colors from theme */
  color?: Vident.Color;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Indicate loading state */
  loading?: boolean;
}

export type ActionIconProps = React.ComponentProps<typeof ActionIcon>;

export type ActionIconVariant = keyof typeof classes.variants;

const classes = {
  root: 'relative appearance-none w-7 h-7 rounded flex justify-center items-center cursor-pointer border border-transparent active:translate-y-px focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
  variants: {
    transparent: {
      primary: 'text-primary-700 dark:text-primary-400 bg-transparent',
      secondary: 'text-secondary-700 dark:text-secondary-400 bg-transparent',
      success: 'text-success-700 dark:text-success-400 bg-transparent',
      warning: 'text-warning-700 dark:text-warning-400 bg-transparent',
      error: 'text-error-700 dark:text-error-400 bg-transparent',
    },
    hover: {
      primary:
        'text-primary-700 dark:text-primary-400 bg-transparent hover:bg-primary-100 dark:hover:bg-gray-800',
      secondary:
        'text-secondary-700 dark:text-secondary-400 bg-transparent hover:bg-secondary-100 dark:hover:bg-gray-800',
      success:
        'text-success-700 dark:text-success-400 bg-transparent hover:bg-success-100 dark:hover:bg-gray-800',
      warning:
        'text-warning-700 dark:text-warning-400 bg-transparent hover:bg-warning-100 dark:hover:bg-gray-800',
      error:
        'text-error-700 dark:text-error-400 bg-transparent hover:bg-error-100 dark:hover:bg-gray-800',
    },
    default: {
      primary:
        'border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
      secondary:
        'border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
      success:
        'border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
      warning:
        'border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
      error:
        'border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
    },
    filled: {
      primary:
        'text-white bg-primary-600 dark:bg-primary-700 hover:bg-primary-700 dark:hover:bg-primary-600',
      secondary:
        'text-white bg-secondary-600 dark:bg-secondary-700 hover:bg-secondary-700 dark:hover:bg-secondary-600',
      success:
        'text-white bg-success-600 dark:bg-success-700 hover:bg-success-700 dark:hover:bg-success-600',
      warning:
        'text-white bg-warning-600 dark:bg-warning-700 hover:bg-warning-700 dark:hover:bg-warning-600',
      error: 'text-white bg-error-600 dark:bg-error-700 hover:bg-error-700 dark:hover:bg-error-600',
    },
    light: {
      primary:
        'text-primary-700 dark:text-primary-200 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-800',
      secondary:
        'text-secondary-700 dark:text-secondary-200 bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-800',
      success:
        'text-success-700 dark:text-success-200 bg-success-100 dark:bg-success-800 hover:bg-success-200 dark:hover:bg-success-800',
      warning:
        'text-warning-700 dark:text-warning-200 bg-warning-100 dark:bg-warning-800 hover:bg-warning-200 dark:hover:bg-warning-800',
      error:
        'text-error-700 dark:text-error-200 bg-error-100 dark:bg-error-800 hover:bg-error-200 dark:hover:bg-error-800',
    },
  },
  loading:
    'before:content-[""] before:absolute before:inset-1 before:bg-white/50 before:cursor-not-allowed',
  disabled: 'translate-y-0 text-gray-400 bg-gray-100 border-gray-100',
};

export const ActionIcon = forwardRef((props, ref) => {
  const {
    as: Element = 'button',
    color = 'primary',
    variant = 'hover',
    className,
    disabled,
    loading,
    loaderProps,
    children,
    ...actionIconProps
  } = props;

  const loader = (
    <Loader {...loaderProps} className={tw('w-5 text-white', loaderProps?.className)} />
  );
  return (
    <Element
      {...actionIconProps}
      type="button"
      ref={ref}
      disabled={disabled || loading}
      className={tw(
        classes.variants[variant][color],
        classes.root,
        loading && classes.loading,
        className
      )}
    >
      {loading ? loader : children}
    </Element>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'button', ActionIconOwnProps>;

ActionIcon.displayName = '@vident-ui/core/ActionIcon';
