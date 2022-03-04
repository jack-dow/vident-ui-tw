import React, { forwardRef } from 'react';

import { tw } from '../../utils';
import type * as Vident from '../../types';

export interface InputOwnProps {
  /** Applies invalid styles sets and aria-invalid=true on input element */
  invalid?: boolean;

  /** Object of classNames used to add classes to different parts of the Input */
  classNames?: {
    [key in keyof typeof classes]?: string;
  };

  /** Element that appears to the left of the input */
  left?: React.ReactNode;

  /** Adds icon to the left side of input */
  leftIcon?: React.ReactNode;

  /** Removes pointer-events: 'none' from left icon, allowing it to be clicked */
  leftIconClickable?: boolean;

  /** The padding-left added to the input to make space for the icon */
  leftIconPadding?: string | number;

  /** Element that appears to the right of the input */
  right?: React.ReactNode;

  /** Adds icon to the right side of input */
  rightIcon?: React.ReactNode;

  /** Removes pointer-events: 'none' from right icon, allowing it to be clicked */
  rightIconClickable?: boolean;

  /** The padding-right added to the input to make space for the icon */
  rightIconPadding?: string | number;

  /** Properties spread to root element */
  wrapperProps?: { [key: string]: any };

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: InputVariant;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** Controls Input size (padding & font-size) */
  size?: InputSize;

  /** Sets aria-disabled=true on input element and applies disabled styles */
  disabled?: boolean;
}
export type InputProps = React.ComponentProps<typeof Input>;

export type InputVariant = keyof typeof classes.input.variants;
export type InputSize = keyof typeof classes.input.sizes;

const classes = {
  wrapper: 'relative rounded-md shadow-sm',
  input: {
    base: 'appearance-none block w-full transition resize-none min-w-0',
    variants: {
      default:
        'border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none',
      minimal: 'border-0 bg-transparent focus:outline-none focus:border-transparent',
    },
    sizes: {
      xs: 'py-1 px-1.5 text-xs',
      sm: 'py-1.5 px-2.5 text-sm sm:text-xs',
      md: 'py-2 px-3 text-base sm:text-sm',
      lg: 'py-3 px-4 text-lg sm:text-base',
    },
    disabled: 'bg-gray-100 text-gray-300 opacity-60 cursor-not-allowed placeholder:text-gray-400',
    invalid:
      'text-error-900 border-error-300 placeholder:text-error-300 focus:ring-error-500 focus:border-error-500',
  },
  leftIcon: 'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none',
  rightIcon: 'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none',
};

export const INPUT_SIZES = Object.keys(classes.input.sizes);

export const Input = forwardRef((props, ref) => {
  const {
    as: Element = 'input',
    className,
    classNames,
    invalid = false,
    disabled,
    wrapperProps,
    size = 'md',
    variant = 'default',
    left,
    leftIcon,
    leftIconClickable,
    right,
    rightIcon,
    rightIconClickable,
    ...inputProps
  } = props;

  return (
    <div
      className={tw(
        classes.wrapper,
        variant === 'minimal' && 'rounded-none shadow-none',
        (left || right) && 'flex',
        classNames?.wrapper,
        className
      )}
      {...wrapperProps}
    >
      {left}
      {leftIcon && (
        <div
          className={tw(
            classes.leftIcon,
            leftIconClickable && 'pointer-events-auto',
            classNames?.leftIcon
          )}
        >
          {leftIcon}
        </div>
      )}
      <Element
        {...inputProps}
        ref={ref}
        aria-invalid={invalid}
        disabled={disabled}
        className={tw(
          classes.input.base,
          classes.input.sizes[size],
          classes.input.variants[variant],
          left ? 'rounded-l-none' : '',
          right ? 'rounded-r-none focus:z-10' : '',
          leftIcon ? 'pl-10' : '',
          rightIcon ? 'pr-10' : '',
          invalid && classes.input.invalid,
          disabled && classes.input.disabled,
          classNames?.input
        )}
      />
      {rightIcon && (
        <div
          className={tw(
            classes.rightIcon,
            rightIconClickable && 'pointer-events-auto',
            classNames?.rightIcon
          )}
        >
          {rightIcon}
        </div>
      )}
      {right}
    </div>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'input', InputOwnProps>;

Input.displayName = '@vident-ui/core/Input';
