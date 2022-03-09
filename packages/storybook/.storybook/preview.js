const React = require('react');
const { SunIcon, MoonIcon } = require('@heroicons/react/solid');
const { ActionIcon, tw } = require('@vident-ui/core');
const { useDarkMode } = require('@vident-ui/hooks');
require('./styles.css');

export const decorators = [
  (Story) => {
    const { isDarkMode, toggle } = useDarkMode();
    return (
      <div className={tw(isDarkMode ? 'dark' : 'light')}>
        <div className="prose dark:prose-invert relative flex min-h-[calc(100vh-32px)] w-full items-center justify-center rounded bg-gray-50 p-4 dark:bg-gray-900">
          <div className="absolute top-2 right-2 z-50">
            <ActionIcon variant="light" onClick={() => toggle()}>
              <span className="sr-only">Toggle Dark Mode</span>
              {isDarkMode ? (
                <MoonIcon className="h-5 w-5 text-gray-300" />
              ) : (
                <SunIcon className="h-5 w-5 text-primary-600" />
              )}
            </ActionIcon>
          </div>
          <Story />
        </div>
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
