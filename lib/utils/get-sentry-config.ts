import { BrowserOptions } from '@sentry/react';

type ParamsType = {
  dsn: string;
  release: string;
};

export const getSentryConfig = ({
  dsn,
  release,
}: ParamsType): BrowserOptions => ({
  dsn,
  release,
  attachStacktrace: true,
  logLevel: 1,
  ignoreErrors: [
    'NavigationDuplicated',
    // 'Invariant Violation',
    'Loading CSS chunk',
    'Loading chunk',
  ],
});
