import React, { useState } from 'react';
import { set, tw } from '@vident-ui/core';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRightIcon } from '@heroicons/react/solid';

import { useStore } from '../../lib/store';
import type { PlaygroundState } from '../../lib/store';
import * as Demos from '../../demos';

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

interface RenderItemsProps extends PlaygroundState {
  child: { [key: string]: any };
  expandedItems: string[];
}

function RenderItems({
  child,
  expandedItems,
  activeComponentName,
  ActiveComponent,
  setActiveComponent,
}: RenderItemsProps) {
  if (typeof child === 'object') {
    return (
      <>
        {Object.entries(child).map((item) => {
          if (typeof item[1] === 'object') {
            return (
              <AccordionItem
                key={item[0]}
                value={item[0]}
                label={item[0]}
                open={expandedItems.includes(item[0])}
              >
                <RenderItems
                  child={item[1]}
                  expandedItems={expandedItems}
                  activeComponentName={activeComponentName}
                  ActiveComponent={ActiveComponent}
                  setActiveComponent={setActiveComponent}
                />
              </AccordionItem>
            );
          } else {
            return (
              <ChildButton
                key={item[0]}
                onClick={() => setActiveComponent(item[0], item[1])}
                selected={activeComponentName === item[0]}
              >
                {item[0]}
              </ChildButton>
            );
          }
        })}
      </>
    );
  }

  return <div>Not valid</div>;
}

export const Navbar = () => {
  const [expandedItems, setExpandedItems] = useState(['@vident-ui', 'core']);
  const state = useStore();

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
          <RenderItems child={navigation} expandedItems={expandedItems} {...state} />
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
    <Accordion.Item {...props} className="space-y-1">
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
      <Accordion.Content className="space-y-1 px-2">{children}</Accordion.Content>
    </Accordion.Item>
  );
}

type ChildButtonProps = JSX.IntrinsicElements['button'] & { selected: boolean };

function ChildButton({ children, selected, ...props }: ChildButtonProps) {
  return (
    <button
      {...props}
      disabled={selected}
      type="button"
      className={tw(
        selected ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50 hover:text-gray-900',
        'group flex w-full items-center rounded-md py-2 px-2 text-sm font-medium text-gray-600'
      )}
    >
      {children}
    </button>
  );
}
