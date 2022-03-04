import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsFocusEvents,
} from '@vident-ui/testing';
import { Button, ButtonProps } from './Button';

const defaultProps: ButtonProps = {};

describe('@vident-ui/core/Button', () => {
  checkAccessibility([<Button>Vident button</Button>]);
  itRendersChildren(Button, defaultProps);
  itIsPolymorphic(Button, defaultProps);
  itSupportsFocusEvents(Button, defaultProps, 'button');
  itSupportsSystemProps({
    component: Button,
    props: defaultProps,
    displayName: '@vident-ui/core/Button',
    refType: HTMLButtonElement,
  });

  it('passes type to button component', () => {
    render(<Button type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('sets disabled attribute based on prop', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
