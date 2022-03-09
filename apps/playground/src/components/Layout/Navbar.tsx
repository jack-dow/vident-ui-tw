import { set, tw } from '@vident-ui/core';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRightIcon } from '@heroicons/react/solid';

import * as Demos from '../../demos';
import { useState } from 'react';

const navigation: any = {};

Object.entries(Demos).forEach((Demo) => {
  const name = Demo[0];
  const Component = Demo[1];

  if (!Component.displayName) {
    throw new Error(`Missing display name for component: ${name}`);
  }
  if (!Component.displayName.includes('@vident-ui/')) {
    throw new Error(
      `Display name must include '@vident-ui/" but is missing for component: ${name}`
    );
  }

  set(Component.displayName, navigation, Component, '/');
});

console.log(navigation);

export const Navbar = () => {
  const [expandedItems, setExpandedItems] = useState(['item-1']);

  return (
    <div className="hidden h-full bg-white p-4 shadow md:flex md:w-64 md:flex-col">
      <div>
        <p className="text-xl font-semibold">vident-ui</p>
      </div>
      <div className="mt-4 flex-grow">
        <Accordion.Root
          type="multiple"
          className="space-y-1"
          value={expandedItems}
          onValueChange={(updatedState) => {
            setExpandedItems(updatedState);
          }}
        >
          <AccordionItem value="item-1" label="Test 1" open={expandedItems.includes('item-1')}>
            <ChildButton>Test child 1</ChildButton>
            <AccordionItem value="item-3" label="Test 3" open={expandedItems.includes('item-3')}>
              <ChildButton>Test child 3</ChildButton>
            </AccordionItem>
          </AccordionItem>
          <AccordionItem value="item-2" label="Test 2" open={expandedItems.includes('item-2')}>
            <ChildButton>Test child 2</ChildButton>
          </AccordionItem>
        </Accordion.Root>
      </div>
    </div>
  );
};

interface CollapsibleButtonProps extends Accordion.AccordionItemProps {
  open: boolean;
  label: string;
  children: React.ReactNode;
}

function AccordionItem({ children, label, open, ...props }: CollapsibleButtonProps) {
  return (
    <Accordion.Item {...props}>
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className={tw(
            open
              ? 'bg-gray-100 text-gray-900'
              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex w-full items-center rounded-md py-2 pr-2 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
          )}
        >
          <ChevronRightIcon
            className={tw(
              open ? 'rotate-90 text-gray-400' : 'text-gray-300',
              'mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
            )}
          />
          {label}
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="space-y-1 px-4">{children}</Accordion.Content>
    </Accordion.Item>
  );
}

interface ChildButtonProps {
  children?: React.ReactNode;
}

function ChildButton({ children }: ChildButtonProps) {
  return (
    <button
      type="button"
      className="group flex w-full items-center rounded-md py-2 px-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    >
      {children}
    </button>
  );
}
