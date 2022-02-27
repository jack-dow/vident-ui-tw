import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';

export function itSupportsFocusEvents(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  selector: string
) {
  it('supports focus events', async () => {
    const onFocusSpy = jest.fn();
    const onBlurSpy = jest.fn();
    const { container } = render(
      <Component {...requiredProps} onFocus={onFocusSpy} onBlur={onBlurSpy} />
    );

    fireEvent.focus(container.querySelector(selector) as Element);
    expect(onFocusSpy).toHaveBeenCalled();

    fireEvent.blur(container.querySelector(selector) as Element);
    expect(onBlurSpy).toHaveBeenCalled();
  });
}
