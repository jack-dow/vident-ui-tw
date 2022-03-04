import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { INPUT_SIZES } from '../Input';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

const sizes = INPUT_SIZES.map((size: any) => (
  <PasswordInput placeholder={size} key={size} size={size} style={{ marginTop: 20 }} />
));

function Controlled(props: Partial<PasswordInputProps>) {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 400, padding: 20 }}>
      <PasswordInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        label="Password"
        placeholder="Password"
        {...props}
      />
    </div>
  );
}

storiesOf('@vident-ui/core/PasswordInput', module)
  .add('Controlled', () => <Controlled />)
  .add('Sizes', () => <div style={{ width: 400, padding: 20 }}>{sizes}</div>)
  .add('Invalid & Disabled', () => (
    <div>
      <Controlled error="error" />
      <Controlled disabled />
    </div>
  ));
