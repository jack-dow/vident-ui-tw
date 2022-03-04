import React, { forwardRef } from 'react';

import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { CloseIcon } from './CloseIcon';
import * as Vident from '../../../types';
import { tw } from '../../../utils';

export interface CloseButtonOwnProps {
  /** Object of classNames used to add classes to different parts of the CloseButton */
  classNames?: {
    wrapper: string;
    icon: string;
  };
}

export type CloseButtonProps = Vident.Merge<Omit<ActionIconProps, 'children'>, CloseButtonOwnProps>;

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ classNames, className, ...closeIconProps }: CloseButtonProps, ref) => (
    <ActionIcon {...closeIconProps} ref={ref} className={tw(classNames?.wrapper, className)}>
      <CloseIcon className={tw('h-5 w-5', classNames?.icon)} />
    </ActionIcon>
  )
);

CloseButton.displayName = '@vident-ui/core/CloseButton';
