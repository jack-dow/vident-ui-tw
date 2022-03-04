import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
} from '@vident-ui/testing';
import { CloseButton, CloseButtonProps } from './CloseButton';

const defaultProps: CloseButtonProps = {};

describe('@vident-ui/core/CloseButton', () => {
  checkAccessibility([<CloseButton aria-label="test" />, <CloseButton title="test" />]);
  itSupportsFocusEvents(CloseButton, defaultProps, '.vident-ActionIcon-root');
  itSupportsSystemProps({
    component: CloseButton as any,
    props: defaultProps,
    displayName: '@vident-ui/core/CloseButton',
    refType: HTMLButtonElement,
  });
});
