import React from 'react';
import { render } from '@testing-library/react';

export function itIsPolymorphic(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  selector?: string
) {
  it('is polymorphic', () => {
    const getTarget = (container: HTMLElement): HTMLElement =>
      selector
        ? (container.querySelector(selector) as HTMLElement)
        : (container.firstChild as HTMLElement);
    const { container: withTag } = render(
      <Component as="a" href="https://google.com.au" {...requiredProps} />
    );
    const { container: withComponent } = render(
      <Component as={(props: any) => <mark data-test-prop {...props} />} {...requiredProps} />
    );

    expect(getTarget(withTag).tagName).toBe('A');
    expect(getTarget(withComponent).tagName).toBe('MARK');
  });
}
