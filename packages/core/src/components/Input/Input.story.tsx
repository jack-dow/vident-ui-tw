import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SearchIcon, MailIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';

import { Input, INPUT_SIZES } from './Input';
import { Button } from '../Button';

const sizeStory = INPUT_SIZES.map((size: any) => (
  <Input as="input" size={size} placeholder={`${size} input`} key={size} />
));

const getStates = (props?: any) => (
  <div className="mx-auto w-full max-w-sm space-y-4">
    <Input placeholder="Text" {...props} />
    <Input placeholder="Tel" type="tel" {...props} />
    <Input placeholder="Number" type="number" {...props} />
    <Input placeholder="Search" type="search" {...props} />
    <Input placeholder="Email" type="email" {...props} />
    <Input placeholder="Url" type="url" {...props} />
    <Input placeholder="Invalid" leftIcon={<SearchIcon className="h-5 w-5" />} invalid {...props} />
    <Input placeholder="Disabled" disabled {...props} />
    <Input placeholder="With left icon" leftIcon={<MailIcon className="h-5 w-5" />} {...props} />
    <Input
      placeholder="With right icon"
      rightIcon={<QuestionMarkCircleIcon className="h-5 w-5" />}
      {...props}
    />
    <Input
      placeholder="With left section"
      left={
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
          http://
        </span>
      }
      {...props}
    />
    <Input
      placeholder="With right section"
      right={
        <span className="inline-flex items-center rounded-r-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
          http://
        </span>
      }
      {...props}
    />
  </div>
);

storiesOf('@vident-ui/core/Input', module)
  .add('Sizes', () => <div className="flex flex-col space-y-4">{sizeStory}</div>)
  .add('Default variant', () => <>{getStates({ variant: 'default' })}</>)
  .add('Minimal variant', () => <>{getStates({ variant: 'minimal' })}</>)
  .add('Custom component: button', () => (
    <>
      {getStates({ as: 'button', children: 'Input button' })}
      {getStates({
        variant: 'unstyled',
        as: 'button',
        children: 'Input button',
      })}
    </>
  ))
  .add('Invalid toggle', () => {
    const [valid, toggle] = useState(false);
    return (
      <div>
        <Input invalid={valid} placeholder="Hello there" />
        <Input style={{ marginTop: 10 }} invalid={valid} placeholder="Hello there" />

        <Button onClick={() => toggle(!valid)} className="mt-4">
          toggle
        </Button>
      </div>
    );
  });
