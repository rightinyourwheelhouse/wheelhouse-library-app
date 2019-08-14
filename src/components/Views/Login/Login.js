import React from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';

export default ({ location }) => {
  // We extract the code we get from Slack if available
  // This code can be used as an access token by the API
  // Therefore we need to send it off to the API before the user can interact with the app
  const { code } = qs.parse(location.search);

  // Redirect to Slack login when there's no code and not authenticated
  if (!code) {
    window.location.href = 'https://slack.com/oauth/authorize?response_type=code&redirect_uri=&scope=identity.basic identity.email identity.avatar identity.team&client_id=20329357267.717373150117';
  } else {
    authorize(code).then(console.log);
    // return (<Redirect to="/" />);
  }

  // The actual login is managed by Slack. We effectively show nothing. Pure functional component
  return null;
};
