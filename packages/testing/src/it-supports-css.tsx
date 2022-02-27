import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsCss(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports css', async () => {
    const styles = { border: '1px solid aquamarine', background: 'beige' };
    const fn = () => styles;
    const { container: withFunction } = render(<Component {...requiredProps} sx={fn} />);
    const { container: withObject } = render(<Component {...requiredProps} sx={styles} />);

    expect(withFunction.firstChild).toHaveStyle(styles);
    expect(withObject.firstChild).toHaveStyle(styles);
  });
}
