import React from 'react';
import { itSupportsSystemProps } from '@vident-ui/testing';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

const defaultProps = {};

describe('@vident-ui/core/Loader', () => {
  itSupportsSystemProps({
    component: Loader,
    props: defaultProps,
    displayName: '@vident-ui/core/Loader',
  });
});
