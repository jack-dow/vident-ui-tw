import React, { forwardRef } from 'react';
import { useId } from '@vident-ui/hooks';

import { InputWrapper, InputWrapperOwnProps } from '../InputWrapper';
import { Input, InputSize, InputProps } from '../Input';
import type * as Vident from '../../types';

export interface TextInputOwnProps
  extends Pick<InputWrapperOwnProps, 'label' | 'error' | 'description'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Omit<InputWrapperOwnProps, 'label' | 'error' | 'description'>;
}

export type TextInputProps = Vident.Merge<InputProps, TextInputOwnProps>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    className,
    id,
    label,
    error,
    type = 'text',
    style,
    description,
    wrapperProps,
    ...inputProps
  } = props;

  const uuid = useId(id);
  return (
    <InputWrapper
      {...wrapperProps}
      id={uuid}
      label={label}
      error={error}
      description={description}
      className={className}
      style={style}
    >
      <Input {...inputProps} ref={ref} id={uuid} type={type} invalid={!!error} />
    </InputWrapper>
  );
});

TextInput.displayName = '@vident-ui/core/TextInput';
