import React from 'react';
import { Label } from '@vident-ui/core';

export const LabelDemo = () => {
  return (
    <div className="space-y-4">
      <Label>This is a default radix label</Label>
      <Label variant="unstyled">This is an un-styled radix label</Label>
      <Label type="native">This a default native label</Label>
      <Label variant="unstyled" type="native">
        This is an un-styled native label
      </Label>
    </div>
  );
};

LabelDemo.displayName = '@vident-ui/core/Label';
