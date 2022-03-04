import React from 'react';
import { storiesOf } from '@storybook/react';

import { Label } from './Label';

storiesOf('@vident-ui/core/Label', module).add('Label', () => (
  <div className="space-y-4">
    <Label>This is a default label</Label>
    <Label variant="unstyled">This is an un-styled label</Label>
  </div>
));
