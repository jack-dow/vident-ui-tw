import React, { useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor } from './Anchor';

storiesOf('@vident-ui/core/Anchor', module).add('Anchor', () => {
  return (
    <Anchor href="https://google.com" target="_blank">
      This is an example anchor
    </Anchor>
  );
});
