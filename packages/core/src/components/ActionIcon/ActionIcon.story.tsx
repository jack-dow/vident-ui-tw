import React from 'react';
import { storiesOf } from '@storybook/react';
import { generateBorderStyles } from '@vident-ui/utils';
import { useBooleanToggle } from '@vident-ui/hooks';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { ActionIcon } from './ActionIcon';
import { Box } from '../Box';
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
      <p className="select-none pl-2 capitalize text-gray-900">{variant}</p>
    </div>
  );
}

storiesOf('@vident-ui/core/ActionIcon', module).add('Test', () => (
  <div className="flex w-full justify-between">
    {NORMAL_COLORS.map((color) => (
      <div className="mt-4 space-y-2">
        <p className="capitalize text-gray-900">{color}</p>
        <div className="space-y-4">
          {variants.map((variant) => (
            <TestWrapper variant={variant} color={color} />
          ))}
        </div>
      </div>
    ))}
  </div>
));
