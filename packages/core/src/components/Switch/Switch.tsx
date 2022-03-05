import React, { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { useBooleanToggle } from '@vident-ui/hooks';

import type * as Vident from '../../types';
import { tw, styles } from '../../utils';

export interface SwitchOwnProps {
  /** Controls Switch appearance */
  variant?: SwitchVariant;

  /** Icon that is visible when the Switch is off  */
  offIcon?: React.ReactNode;

  /** Icon that is visible when the Switch is on  */
  onIcon?: React.ReactNode;

  /** Classes to be added to the Switch Thumb */
  thumbClassName?: string;
}
export type SwitchProps = Vident.Merge<SwitchPrimitive.SwitchProps, SwitchOwnProps>;

export type SwitchVariant = keyof typeof classes.root & keyof typeof classes.thumb;

const classes = {
  root: {
    simple: {
      base: `relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${styles.focus}`,
      checked: 'bg-primary-600',
      unchecked: 'bg-gray-200',
    },
  },
  thumb: {
    simple: {
      base: 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      checked: 'translate-x-5',
      unchecked: 'translate-x-0',
    },
  },
  icon: {
    base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
    showing: 'opacity-100 ease-in duration-200',
    hidden: 'opacity-0 ease-out duration-100',
  },
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    variant = 'simple',
    checked,
    defaultChecked,
    onCheckedChange,
    children,
    offIcon,
    onIcon,
    className,
    thumbClassName,
    ...switchProps
  } = props;
  const [internalChecked, toggleInternal] = useBooleanToggle(checked || defaultChecked || false);
  const enabled = typeof checked === 'boolean' ? checked : internalChecked;
  return (
    <SwitchPrimitive.Root
      {...switchProps}
      ref={ref}
      checked={enabled}
      onCheckedChange={() => {
        if (typeof checked !== 'boolean') toggleInternal();
        if (onCheckedChange) onCheckedChange(enabled);
      }}
      className={tw(
        classes.root.simple.base,
        enabled ? classes.root.simple.checked : classes.root.simple.unchecked,
        className
      )}
    >
      {children}
      <SwitchPrimitive.Thumb
        className={tw(
          classes.thumb.simple.base,
          enabled ? classes.thumb.simple.checked : classes.thumb.simple.unchecked,
          (offIcon || onIcon) && 'relative',
          thumbClassName
        )}
      >
        {onIcon && (
          <span
            aria-hidden="true"
            className={tw(classes.icon.base, enabled ? classes.icon.hidden : classes.icon.showing)}
          >
            {onIcon}
          </span>
        )}
        {offIcon && (
          <span
            aria-hidden="true"
            className={tw(classes.icon.base, enabled ? classes.icon.showing : classes.icon.hidden)}
          >
            {offIcon}
          </span>
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = '@vident-ui/core/Switch';
