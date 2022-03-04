import React, { forwardRef, isValidElement } from 'react';

import { Label } from '../Label';
import { tw } from '../../utils';
import type * as Vident from '../../types';

export interface InputWrapperOwnProps {
  /** htmlFor label prop */
  id?: string;

  /** Object of classNames used to add classes to different parts of the Input */
  classNames?: {
    [key in keyof typeof classes]?: string;
  };

  /** Input label, displayed before input */
  label?: React.ReactNode;

  /** Input description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;

  /** Adds hint to right side inline with label  */
  hint?: React.ReactNode;

  /** Hides label so it is only visible to screen readers */
  hideLabel?: boolean;

  /** Props spread to label element */
  labelProps?: React.ComponentPropsWithoutRef<'label'> & { [key: string]: any };

  /** Props spread to description element */
  descriptionProps?: React.ComponentPropsWithoutRef<'p'> & { [key: string]: any };

  /** Props spread to error element */
  errorProps?: React.ComponentPropsWithoutRef<'p'> & { [key: string]: any };

  /** Props spread to hint element */
  hintProps?: React.ComponentPropsWithoutRef<'span'> & { [key: string]: any };
}

export type InputWrapperProps = Vident.Merge<
  React.ComponentPropsWithoutRef<'div'>,
  InputWrapperOwnProps
>;

const classes = {
  root: '',
  label: '',
  labelWrapper: '',
  hint: 'text-sm text-gray-500',
  error: 'mt-2 text-sm text-error-600 select-none break-words',
  description: 'mt-2 text-sm text-gray-500 select-none break-words',
};

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>((props, ref) => {
  const {
    id,
    className,
    classNames,
    hideLabel,
    label,
    labelProps,
    description,
    descriptionProps,
    hint,
    hintProps,
    children,
    error,
    errorProps,
    ...inputWrapperProps
  } = props;
  return (
    <div {...inputWrapperProps} ref={ref} className={tw(classes.root, classNames?.root, className)}>
      <div
        className={tw(
          classes.labelWrapper,
          hint ? 'flex justify-between' : '',
          label || hint ? 'mb-1' : '',
          classNames?.labelWrapper
        )}
      >
        {label && (
          <Label
            type="native"
            {...labelProps}
            id={id ? `${id}-label` : undefined}
            htmlFor={id}
            className={tw(classes.label, hideLabel && 'sr-only', classNames?.label)}
          >
            {label}
          </Label>
        )}

        {hint && (
          <span
            {...hintProps}
            className={tw(classes.hint, classNames?.hint)}
            id={id ? `${id}-hint` : undefined}
          >
            {hint}
          </span>
        )}
      </div>

      {children}

      {description && !error && (
        <p
          {...descriptionProps}
          className={tw(classes.description, classNames?.description)}
          id={id ? `${id}-description` : undefined}
        >
          {description}
        </p>
      )}
      {typeof error !== 'boolean' && error && (
        <p
          {...errorProps}
          className={tw(classes.error, classNames?.error)}
          id={id ? `${id}-error` : undefined}
        >
          {error}
        </p>
      )}
    </div>
  );
});

InputWrapper.displayName = '@vident-ui/core/InputWrapper';
