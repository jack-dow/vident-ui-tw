import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputIcons(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports input icon', async () => {
    const { getByText } = render(
      <Component {...requiredProps} iconLeft="Test icon left" iconRight="Test icon right" />
    );
    expect(getByText('Test icon left')).toBeInTheDocument();
    expect(getByText('Test icon right')).toBeInTheDocument();
  });
}
