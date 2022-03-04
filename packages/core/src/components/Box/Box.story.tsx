import React, { useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from './index';

storiesOf('@vident-ui/core/Box', module).add('Box', () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <Box className="space-y-4">
      <Box
        ref={ref}
        className="rounded-md bg-indigo-600 p-8 text-center text-lg text-gray-50 shadow-2xl transition hover:bg-indigo-800 hover:ring hover:ring-indigo-500 hover:ring-offset-4 hover:ring-offset-gray-50"
      >
        Box let&apos;s you create polymorphic components
      </Box>
    </Box>
  );
});
