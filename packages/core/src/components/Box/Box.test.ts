import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@vident-ui/testing';
import { Box } from './Box';

describe('@vident-ui/core/Box', () => {
  itRendersChildren(Box, {});
  itIsPolymorphic(Box, {});
  itSupportsSystemProps({
    component: Box,
    props: {},
    displayName: '@vident-ui/core/Box',
    refType: HTMLDivElement,
  });
});
