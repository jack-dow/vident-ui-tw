import React from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export interface PasswordToggleIconProps {
  reveal: boolean;
  size?: number;
}

export function PasswordToggleIcon({ reveal, size = 20 }: PasswordToggleIconProps) {
  return reveal ? (
    <EyeOffIcon width={size} height={size} />
  ) : (
    <EyeIcon width={size} height={size} />
  );
}
