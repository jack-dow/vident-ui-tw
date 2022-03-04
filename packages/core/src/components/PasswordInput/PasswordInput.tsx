import React, { forwardRef } from 'react';
import { useBooleanToggle } from '@vident-ui/hooks';

import { get } from '../../utils';
import { ActionIcon } from '../ActionIcon';
import { TextInput, TextInputProps } from '../TextInput';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import type * as Vident from '../../types';

export interface PasswordInputProps extends Omit<TextInputProps, 'classNames' | 'styles'> {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;

  /** Provide your own visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size?: number }>;
}

const buttonSizes = {
  xs: 22,
  sm: 24,
  md: 28,
  lg: 32,
  xl: 40,
};

const iconSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      disabled,
      toggleTabIndex = 0,
      label = 'Password',
      autoComplete = 'current-password',
      placeholder = 'Enter your password',
      size = 'md',
      visibilityToggleIcon: VisibilityToggleIcon = PasswordToggleIcon,
      ...others
    }: PasswordInputProps,
    ref
  ) => {
    const [passwordShowing, toggle] = useBooleanToggle(false);

    return (
      <TextInput
        label={label}
        type={passwordShowing ? 'text' : 'password'}
        autoComplete={autoComplete}
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        size={size}
        rightIconClickable
        {...others}
        rightIcon={
          !disabled && (
            <ActionIcon
              className="-mr-1.5"
              tabIndex={toggleTabIndex}
              variant="default"
              style={{ width: get(size, buttonSizes), height: get(size, buttonSizes) }}
              aria-hidden
              onClick={(event) => {
                event.preventDefault();
                toggle();
              }}
            >
              <VisibilityToggleIcon
                reveal={passwordShowing}
                size={get(size, iconSizes) as number}
              />
            </ActionIcon>
          )
        }
      />
    );
  }
);

PasswordInput.displayName = '@vident-ui/core/PasswordInput';
