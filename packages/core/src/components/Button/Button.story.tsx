import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@heroicons/react/outline';

import { Box } from '../Box';
import { NORMAL_COLORS } from '../../utils';
import { Button, ButtonSize, ButtonProps } from './Button';

const getVariants = (props?: Partial<ButtonProps>) =>
  NORMAL_COLORS.map((color: typeof NORMAL_COLORS[number]) => (
    <Button key={color} color={color} className="capitalize" {...props}>
      {props?.variant || 'primary'} - {color}
    </Button>
  ));

const getLinkVariants = (props?: any) =>
  NORMAL_COLORS.map((color: typeof NORMAL_COLORS[number]) => (
    <Button
      {...props}
      as="a"
      href="https://google.com.au"
      target="_blank"
      rel="noreferrer"
      key={color}
      color={color}
    >
      link - {color}
    </Button>
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[]).map((size) => (
  <Button key={size} size={size}>
    Button {size}
  </Button>
));

const loading = (['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[]).map((size, index) => (
  <Button key={size} size={size} loading loaderPosition={index > 2 ? 'right' : 'left'}>
    Button {size}
  </Button>
));

storiesOf('@vident-ui/core/Button', module)
  .add('Variants', () => (
    <div className="space-y-4">
      <div className="space-x-4">{getVariants({})}</div>
      <div className="space-x-4">{getVariants({ variant: 'secondary' })}</div>
      <div className="space-x-4">{getVariants({ variant: 'white' })}</div>
    </div>
  ))
  .add('As link', () => (
    <div className="space-y-4">
      <div className="space-x-4">{getLinkVariants({})}</div>
      <div className="space-x-4">{getLinkVariants({ variant: 'secondary' })}</div>
      <div className="space-x-4">{getLinkVariants({ variant: 'white' })}</div>
    </div>
  ))
  .add('Icons', () => (
    <div className="space-y-4">
      <div className="space-x-4">
        {getVariants({ leftIcon: <CalendarIcon className="mr-2 w-5" /> })}
      </div>
      <div className="space-x-4">
        {getLinkVariants({
          rightIcon: <ExternalLinkIcon className="ml-2 w-5" />,
          variant: 'secondary',
        })}
      </div>

      <div className="space-x-4">
        {getVariants({
          variant: 'primary',
          leftIcon: <CalendarIcon className="mr-2 w-5" />,
          rightIcon: <ExternalLinkIcon className="ml-2 w-5" />,
        })}
      </div>
    </div>
  ))
  .add('Sizes', () => <div className="space-x-4">{sizes}</div>)
  .add('Disabled', () => (
    <>
      <div className="my-4 space-x-4">{getVariants({ disabled: true })}</div>
      <div className="my-4 space-x-4">{getVariants({ variant: 'secondary', disabled: true })}</div>
      <div className="my-4 space-x-4">{getVariants({ variant: 'white', disabled: true })}</div>
    </>
  ))
  .add('Loading', () => (
    <div style={{ padding: 40 }}>
      <div className="flex flex-row flex-wrap items-center justify-start space-x-4">{loading}</div>
    </div>
  ))
  .add('Gradient', () => (
    <div style={{ padding: 40 }}>
      <div className="space-x-4">
        <Button className="bg-gradient-to-tr from-red-600 to-blue-600">Red - Blue</Button>
        <Button className="bg-gradient-to-tr from-gray-600 to-indigo-600">Gray - Indigo</Button>
      </div>
    </div>
  ));
