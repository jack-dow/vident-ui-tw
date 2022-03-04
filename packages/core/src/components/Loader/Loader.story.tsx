import React from 'react';
import { storiesOf } from '@storybook/react';
import { NORMAL_COLORS } from '../../utils';

import { Loader, LoaderProps } from './Loader';

const getThemes = (props?: LoaderProps) =>
  NORMAL_COLORS.map((color) => <Loader key={color} css={{ my: '$3' }} {...props} />);

storiesOf('@vident-ui/core/Loader', module).add('Loaders', () => (
  <div className="space-y-4">
    <Loader className="w-8 text-primary-600" />
    <Loader className="w-8 text-secondary-600" variant="dots" />
    <Loader className="w-8 text-success-600" variant="bars" />
  </div>
));
