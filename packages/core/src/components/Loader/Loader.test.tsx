import React from 'react';
import { itSupportsSystemProps } from '@vident-ui/utils';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

const defaultProps = {};

describe('@vident-ui/core/Loader', () => {
  itSupportsSystemProps({
    component: Loader,
    props: defaultProps,
    displayName: '@vident-ui/core/Loader',
  });

  it('sets svg width based on size prop', () => {
    const { container } = render(<Loader size={41} variant="bars" />);
    const element = container.firstChild as HTMLElement;
    expect(element.getAttribute('width')).toBe('41px');
  });
});
