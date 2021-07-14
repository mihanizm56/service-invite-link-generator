export { fetchLogger } from './loggers/fetch-logger';

import { SentryLogger } from './loggers/sentry-logger';
export const sentryLogger = new SentryLogger();
