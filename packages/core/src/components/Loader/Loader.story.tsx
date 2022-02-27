import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_COLORS, VidentProvider } from '@vident-ui/theme';

import { Loader, LoaderProps } from './Loader';

const getThemes = (props?: LoaderProps) =>
  DEFAULT_COLORS.map((color) => (
    <Loader key={color} color={`$${color}600`} width="$6" css={{ my: '$3' }} {...props} />
  ));

const sizes = ([10, '$2', '$4', '$6', '$12', '$16', 100] as const).map((size) => (
  <div>
    <Loader key={size} size={size} css={{ display: 'block', my: '$4' }} />
    <p>{size}</p>
  </div>
));

storiesOf('@vident-ui/core/Loader/stories', module)
  .add('Oval', () => <div>{getThemes({ variant: 'oval' })}</div>)
  .add('Dots', () => <div>{getThemes({ variant: 'dots' })}</div>)
  .add('Bars', () => <div>{getThemes({ variant: 'bars' })}</div>)
  .add('Sizes', () => <div>{sizes}</div>)
  .add('Loader type on VidentProvider', () => (
    <VidentProvider defaults={{ loader: 'dots' }}>
      <div>
        <Loader size="$6" />
      </div>
    </VidentProvider>
  ));
