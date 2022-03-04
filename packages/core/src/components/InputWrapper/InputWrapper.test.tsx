import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itSupportsSystemProps } from '@vident-ui/testing';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

const defaultProps: InputWrapperProps = {
  id: 'test-id',
  children: 'test',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
};

const queries = {
  getLabel: (container: HTMLElement) => container.querySelector('.vident-InputWrapper-label'),
  getError: (container: HTMLElement) => container.querySelector('.vident-InputWrapper-error'),
  getRequired: (container: HTMLElement) => container.querySelector('.vident-InputWrapper-required'),
  getDescription: (container: HTMLElement) =>
    container.querySelector('.vident-InputWrapper-description'),
};

describe('@vident-ui/core/InputWrapper', () => {
  itRendersChildren(InputWrapper, defaultProps);
  itSupportsSystemProps({
    component: InputWrapper,
    props: defaultProps,
    displayName: '@vident-ui/core/InputWrapper',
    refType: HTMLDivElement,
  });

  it('renders correct error, description and label', () => {
    const { container } = render(
      <InputWrapper
        {...defaultProps}
        label="test-label"
        error="test-error"
        description="test-description"
      />
    );

    expect(queries.getLabel(container)?.textContent).toBe('test-label');
    expect(queries.getDescription(container)?.textContent).toBe('test-description');
    expect(queries.getError(container)?.textContent).toBe('test-error');
  });

  it('does not render error if error prop is boolean', () => {
    const { container } = render(<InputWrapper {...defaultProps} error />);
    expect(queries.getError(container)).toBe(null);
  });

  it('spreads props to label, description and error', () => {
    const { container } = render(
      <InputWrapper
        {...defaultProps}
        labelProps={{ 'data-test-label': true }}
        descriptionProps={{ 'data-test-description': true }}
        errorProps={{ 'data-test-error': true }}
      />
    );

    expect(queries.getLabel(container)).toHaveAttribute('data-test-label');
    expect(queries.getDescription(container)).toHaveAttribute('data-test-description');
    expect(queries.getError(container)).toHaveAttribute('data-test-error');
  });
});
