import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputSections(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports input right section', async () => {
    const { getByText } = render(
      <Component {...requiredProps} right="Test right section" left="Test left section" />
    );
    expect(getByText('Test right section')).toBeInTheDocument();
    expect(getByText('Test left section')).toBeInTheDocument();
  });
}
