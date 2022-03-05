import React, { forwardRef } from 'react';

import { tw } from '../../utils';
import { Loader } from '../Loader';

import type * as Vident from '../../types';
import type { LoaderProps } from '../Loader';
import { classes } from './ActionIcon.styles';

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
        classes.variants?.[variant]?.[color] || '',
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
