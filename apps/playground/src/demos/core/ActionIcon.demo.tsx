import React from 'react';

import { ActionIcon, Text, NORMAL_COLORS } from '@vident-ui/core';
import { useBooleanToggle } from '@vident-ui/hooks';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

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

export const ActionIconDemo = () => {
  return (
    <div className="flex w-full justify-between">
      {NORMAL_COLORS.map((color) => (
        <div className="mt-4 space-y-2">
          <Text className="select-none capitalize">{color}</Text>
          <div className="space-y-4">
            {variants.map((variant) => (
              <TestWrapper variant={variant} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

ActionIconDemo.displayName = '@vident-ui/core/ActionIcon';
