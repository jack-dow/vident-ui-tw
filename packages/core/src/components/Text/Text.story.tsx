import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from './Text';

const sizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
const colors = ['gray', 'primary', 'secondary', 'success', 'warning', 'error'] as const;

storiesOf('@vident-ui/core/Text', module).add('Text', () => (
  <div className="flex w-full justify-between">
    {sizes.map((size) => (
      <div className="space-y-2">
        {colors.map((color) => (
          <div>
            <Text size={size} color={color} className="capitalize">
              {size} - {color}
            </Text>
          </div>
        ))}
      </div>
    ))}
  </div>
));
