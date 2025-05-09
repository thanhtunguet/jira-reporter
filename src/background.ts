import * as Sentry from '@sentry/react';
import {SENTRY_DSN} from 'src/config/secrets';
import {openJira} from 'src/helpers/open-jira';

Sentry.init({
  dsn: SENTRY_DSN,
});

chrome.action.onClicked.addListener(() => {
  openJira();
});
