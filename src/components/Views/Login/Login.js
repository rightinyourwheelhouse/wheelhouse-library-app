import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import qs from 'query-string';
import { LoginButton, LoginContainer } from './Login.styles';
import useCookie from '../../../hooks/useCookie';

import * as userActionFile from '../../../redux/actions/users';

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

// TEMP Fix voor probleem dat hij meermaals de calls doet omwille van rerender. Tijdelijke oplossing?
let isCodeSentToApi = false;

export default connect(mapStateToProps, mapDispatchToProps)(({
  location,
  userActions,
}) => {
  const [userObject, setUserObject] = useCookie('user'); // eslint-disable-line

  // We extract the code we get from Slack if available
  // This code can be used as an access token by the API
  // Therefore we need to send it off to the API before the user can interact with the app
  const { code } = qs.parse(location.search);
  let result = (
    <p>Loading...</p>
  );

  // Redirect to Slack login when there's no code and not authenticated
  if (!code) {
    const queryParams = Object.entries({
      scope: 'identity.basic,identity.email,identity.avatar',
      client_id: '20329357267.759347069140',
      redirect_uri: process.env.REACT_APP_SLACK_CALLBACK_URL,
    })
      .filter(([key, value]) => value && key)
      .map(([key, value]) => `${key}=${value}`);
    const href = `https://slack.com/oauth/authorize?${queryParams.join('&')}`;
    result = (
      <LoginContainer>
        <p>
          <strong>All the books are waiting for you!</strong>
        </p>
        <p>
          Sign in to get started!
        </p>
        <LoginButton href={href}><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></LoginButton>
      </LoginContainer>
    );
  } else if (!isCodeSentToApi) {
    isCodeSentToApi = true;
    userActions.login(code).then((newUserObject) => {
      setUserObject(JSON.stringify(newUserObject));
    });
  } else {
    result = <Redirect to="/overview" />;
  }

  // The actual login is managed by Slack. We effectively show nothing. Pure functional component
  return result;
});
