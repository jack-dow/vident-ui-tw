import React from 'react';

export function InputStylesApiWrapper({ component: Component, ...props }: any) {
  return (
    <Component
      style={{ maxWidth: 400 }}
      placeholder="Placeholder"
      label="Label"
      description="Description"
      rightIcon="R"
      leftIcon="L"
      error="Error"
      css={{ mx: 'auto', mt: '$4' }}
      {...props}
    />
  );
}
