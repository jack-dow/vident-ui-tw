import React from 'react';

import type * as Vident from '../../types';
import { tw, styles } from '../../utils';
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
  root: `relative inline-flex items-center cursor-pointer select-none text-sm font-medium rounded-md active:translate-y-px ${styles.focus}`,
  sizes: {
    xs: 'px-2.5 py-1.5 rounded text-xs',
    sm: 'px-3 py-2 leading-4',
    md: 'px-4 py-2',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
  },
  variants: {
    primary: {
      primary:
        'text-white dark:bg-gray-100 bg-primary-600 dark:bg-primary-800 hover:bg-primary-700 dark:hover:text-white dark:hover:bg-primary-700',
      secondary:
        'text-white dark:bg-gray-100 bg-secondary-600 dark:bg-secondary-800 hover:bg-secondary-700 dark:hover:text-white dark:hover:bg-secondary-700',
      success:
        'text-white dark:bg-gray-100 bg-success-600 dark:bg-success-800 hover:bg-success-700 dark:hover:text-white dark:hover:bg-success-700',
      warning:
        'text-white dark:bg-gray-100 bg-warning-600 dark:bg-warning-800 hover:bg-warning-700 dark:hover:text-white dark:hover:bg-warning-700',
      error:
        'text-white dark:bg-gray-100 bg-error-600 dark:bg-error-800 hover:bg-error-700 dark:hover:text-white dark:hover:bg-error-700',
    },
    secondary: {
      primary:
        'text-primary-700 dark:text-primary-200 bg-primary-100 dark:bg-primary-700/[0.35] hover:bg-primary-200 dark:hover:bg-primary-600/[0.45] dark:hover:text-primary-100',
      secondary:
        'text-secondary-700 dark:text-secondary-200 bg-secondary-100 dark:bg-secondary-700/[0.35] hover:bg-secondary-200 dark:hover:bg-secondary-600/[0.45] dark:hover:text-secondary-100',
      success:
        'text-success-700 dark:text-success-200 bg-success-100 dark:bg-success-700/[0.35] hover:bg-success-200 dark:hover:bg-success-600/[0.45] dark:hover:text-success-100',
      warning:
        'text-warning-700 dark:text-warning-200 bg-warning-100 dark:bg-warning-700/[0.35] hover:bg-warning-200 dark:hover:bg-warning-600/[0.45] dark:hover:text-warning-100',
      error:
        'text-error-700 dark:text-error-200 bg-error-100 dark:bg-error-700/[0.35] hover:bg-error-200 dark:hover:bg-error-600/[0.45] dark:hover:text-error-100',
    },
    default:
      'text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white',
  },
  states: {
    loading: 'pointer-events-none opacity-50',
    disabled:
      'border-transparent bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-900 cursor-not-allowed hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-900 active:translate-y-0',
  },
  icon: {
    base: 'flex items-center',
    leftIcon: 'mr-2',
    rightIcon: 'ml-2',
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
    variant === 'default' ? classes.variants.default : classes.variants?.[variant]?.[color] || '';

  const loader = (
    <Loader {...loaderProps} className={tw('w-5 text-white', loaderProps?.className)} />
  );

  return (
    <Element
      {...buttonProps}
      className={tw(
        variantClass,
        loading && classes.states.loading,
        classes.root,
        disabled && classes.states.disabled,
        classes.sizes?.[size] || '',
        variant !== 'secondary' && 'shadow-sm',
        className
      )}
      ref={ref}
      type={type}
      disabled={disabled || loading}
    >
      {(leftIcon || (loading && loaderPosition === 'left')) && (
        <span className={tw(classes.icon.base, classes.icon.leftIcon)}>
          {loading ? loader : leftIcon}
        </span>
      )}
      <span style={{ textTransform: uppercase ? 'uppercase' : undefined }}>{children}</span>
      {(rightIcon || (loading && loaderPosition === 'right')) && (
        <span className={tw(classes.icon.base, classes.icon.rightIcon)}>
          {loading ? loader : rightIcon}
        </span>
      )}
    </Element>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'button', ButtonOwnProps>;

Button.displayName = '@vident-ui/core/Button';
