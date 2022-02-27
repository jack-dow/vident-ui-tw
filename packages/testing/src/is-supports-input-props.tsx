import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsWrapperProps } from './it-supports-wrapper-props';
import { itConnectsLabelAndInput } from './it-connects-label-and-input';
import { itSupportsInputIcons } from './it-supports-input-icons';
import { itSupportsInputSections } from './it-supports-input-sections';

export function itSupportsInputProps(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  name: string
) {
  itSupportsWrapperProps(Component, requiredProps);
  itConnectsLabelAndInput(Component, requiredProps);
  itSupportsInputIcons(Component, requiredProps);
  itSupportsInputSections(Component, requiredProps);

  it('handles required attribute correctly', async () => {
    const { container } = render(
      <Component {...requiredProps} required id="secret-test-id" label="Test label" />
    );
    expect(container.querySelector('#secret-test-id')).toHaveAttribute('required');
  });

  it('handles error and invalid state', async () => {
    const { container: invalid } = render(
      <Component {...requiredProps} required id="invalid-test-id" error />
    );
    const { container: withError } = render(
      <Component {...requiredProps} required id="error-test-id" error="Test error" />
    );

    expect(invalid.querySelector('#invalid-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(withError.querySelector('#error-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(invalid.querySelectorAll(`.vident-${name}-error`)).toHaveLength(0);
    expect(withError.querySelector(`.vident-${name}-error`)).toBeInTheDocument();
    expect(withError.querySelector(`.vident-${name}-error`)?.textContent).toBe('Test error');
  });

  it('renders input description', async () => {
    const { getByText } = render(<Component {...requiredProps} description="Test description" />);
    expect(getByText('Test description')).toBeInTheDocument();
  });

  it('sets border-radius on input', async () => {
    const { container } = render(<Component {...requiredProps} radius={43} id="secret-test-id" />);
    expect(container.querySelector('#secret-test-id')).toHaveStyle({ borderRadius: '43px' });
  });
}
