import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputIcons,
  itSupportsInputSections,
} from '@vident-ui/testing';
import { Input } from './Input';

const defaultProps: React.ComponentProps<typeof Input> = {};

describe('@vident-ui/core/Input', () => {
  itIsPolymorphic(Input, defaultProps, '.vident-Input-input');
  itSupportsWrapperProps(Input, defaultProps);
  itSupportsInputIcons(Input, defaultProps);
  itSupportsInputSections(Input, defaultProps);
  checkAccessibility([
    <Input aria-label="test-input" />,
    <Input placeholder="test-input" />,
    <Input placeholder="test-input" invalid />,
  ]);

  itSupportsSystemProps({
    component: Input,
    props: defaultProps,
    displayName: '@vident-ui/core/Input',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
