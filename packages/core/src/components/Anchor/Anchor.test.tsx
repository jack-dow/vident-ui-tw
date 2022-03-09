import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@vident-ui/testing';
import { Anchor, AnchorProps } from './Anchor';

const defaultProps: AnchorProps = {};

describe('@vident-ui/core/Anchor', () => {
  itRendersChildren(Anchor, defaultProps);
  itIsPolymorphic(Anchor, defaultProps);
  itSupportsSystemProps({
    component: Anchor,
    props: defaultProps,
    displayName: '@vident-ui/core/Anchor',
    refType: HTMLAnchorElement,
  });

  it('adds type="button" attribute if component prop is button', () => {
    const { container: link } = render(<Anchor as="a" />);
    const { container: button } = render(<Anchor as="button" />);
    const { container: buttonReset } = render(<Anchor as="button" type="reset" />);

    expect(link.querySelector('a')?.getAttribute('type')).toBe(null);
    expect(button.querySelector('button')?.getAttribute('type')).toBe('button');
    expect(buttonReset.querySelector('button')?.getAttribute('type')).toBe('reset');
  });
});
