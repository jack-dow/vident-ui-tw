import React, { forwardRef } from 'react';

import { tw, styles } from '../../utils';
import type * as Vident from '../../types';

export type AnchorProps = React.ComponentProps<typeof Anchor>;

export const Anchor = forwardRef((props, ref) => {
  const { as: Element = 'a', className, ...anchorProps } = props;

  return (
    <Element
      {...anchorProps}
      ref={ref}
      className={tw(
        'cursor-pointer p-0 text-primary-700 hover:underline focus:outline-none dark:text-primary-500 ',
        styles.focus,
        className
      )}
    />
  );
}) as Vident.Polymorphic.ForwardRefComponent<'a'>;

Anchor.displayName = '@vident-ui/core/Anchor';
