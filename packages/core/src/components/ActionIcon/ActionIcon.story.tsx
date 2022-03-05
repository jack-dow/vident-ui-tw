import React from 'react';
import { storiesOf } from '@storybook/react';
import { generateBorderStyles } from '@vident-ui/utils';
import { useBooleanToggle } from '@vident-ui/hooks';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

import { ActionIcon } from './ActionIcon';
import { Text } from '../Text';
import { NORMAL_COLORS } from '../../utils';

const variants = ['hover', 'filled', 'light', 'default', 'transparent'] as const;

function TestWrapper({ variant, color }: { variant: any; color: any }) {
  const [passwordShowing, toggle] = useBooleanToggle();
  return (
    <div key={`${variant}-${color}`} className="flex">
      <ActionIcon variant={variant} color={color} onClick={() => toggle()}>
        {passwordShowing ? (
          <EyeIcon style={{ width: 20, height: 20 }} />
        ) : (
          <EyeOffIcon style={{ width: 20, height: 20 }} />
        )}
      </ActionIcon>
      <Text className="select-none pl-2 capitalize">{variant}</Text>
    </div>
  );
}

storiesOf('@vident-ui/core/ActionIcon', module).add('Test', () => (
  <div className="flex w-full justify-between">
    {NORMAL_COLORS.map((color) => (
      <div className="mt-4 space-y-2">
        <Text className="capitalize">{color}</Text>
        <div className="space-y-4">
          {variants.map((variant) => (
            <TestWrapper variant={variant} color={color} />
          ))}
        </div>
      </div>
    ))}
  </div>
));
