import React from 'react';

import * as Vident from '../../types/utility';
import { Box } from '../Box';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
} as const;

export interface LoaderOwnProps {
  /** Loader appearance */
  variant?: keyof typeof LOADERS;
}

export type LoaderProps = Vident.Merge<React.ComponentPropsWithoutRef<'svg'>, LoaderOwnProps>;

export function Loader(props: LoaderProps) {
  const { variant = 'oval', ...loaderProps } = props;
  const defaultLoader: keyof typeof LOADERS = variant in LOADERS ? variant : 'oval';

  return <Box role="presentation" {...loaderProps} as={LOADERS[defaultLoader]} />;
}

Loader.displayName = '@vident-ui/core/Loader';
