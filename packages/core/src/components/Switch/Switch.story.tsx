import React from 'react';
import { storiesOf } from '@storybook/react';
import { useBooleanToggle } from '@vident-ui/hooks';
import { XIcon, CheckIcon } from '@heroicons/react/solid';

import { Switch } from './Switch';
import { Label } from '../Label';

storiesOf('@vident-ui/core/Switch', module).add('Switches', () => {
  const [checked, toggle] = useBooleanToggle();
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="s1">Uncontrolled</Label>
        <Switch id="s1" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="s2">Controlled</Label>
        <Switch id="s2" checked={checked} onCheckedChange={() => toggle()} />
      </div>
      <div className="space-y-1">
        <Label htmlFor="s3">Default Checked</Label>
        <Switch id="s3" defaultChecked={true} />
      </div>
      <div className="space-y-1">
        <Label htmlFor="s4">Locked</Label>
        <Switch id="s4" checked />
      </div>
      <div className="space-y-1">
        <Label htmlFor="s5">With Icons</Label>
        <Switch
          id="s5"
          onIcon={<XIcon className="h-3 w-3 text-gray-400" />}
          offIcon={<CheckIcon className="h-3 w-3 text-primary-600" />}
        />
      </div>
    </div>
  );
});
