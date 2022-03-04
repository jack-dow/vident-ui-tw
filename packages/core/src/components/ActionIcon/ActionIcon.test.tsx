import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsFocusEvents,
  itSupportsSystemProps,
} from '@vident-ui/testing';
import { ActionIcon } from './ActionIcon';

const defaultProps: React.ComponentProps<typeof ActionIcon> = { children: <div /> };

describe('@vident-ui/core/ActionIcon', () => {
  itIsPolymorphic(ActionIcon, defaultProps);
  itRendersChildren(ActionIcon, defaultProps);
  itSupportsFocusEvents(ActionIcon, defaultProps, '.vident-ActionIcon-root');
  itSupportsSystemProps({
    component: ActionIcon,
    props: defaultProps,
    displayName: '@vident-ui/core/ActionIcon',
    refType: HTMLButtonElement,
  });

  checkAccessibility([
    <ActionIcon {...defaultProps} title="Action icon" />,
    <ActionIcon {...defaultProps} aria-label="Action icon" />,
  ]);

  it('supports changing button type', () => {
    render(<ActionIcon type="submit">$</ActionIcon>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('replaces icon with Loader when loading is set to true', () => {
    const { container: loading } = render(
      <ActionIcon loading>
        <span className="test-icon" />
      </ActionIcon>
    );

    const { container: notLoading } = render(
      <ActionIcon loading={false}>
        <span className="test-icon" />
      </ActionIcon>
    );

    expect(notLoading.querySelectorAll('.test-icon')).toHaveLength(1);
    expect(notLoading.querySelectorAll('.vident-ActionIcon-loading')).toHaveLength(0);

    expect(loading.querySelectorAll('.test-icon')).toHaveLength(0);
    expect(loading.querySelectorAll('.vident-ActionIcon-loading')).toHaveLength(1);
  });
});
