import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import qs from 'query-string';
import {Redirect} from 'react-router-dom';


import * as userActionFile from '../../../redux/actions/users';

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActionFile, dispatch),
});

const mapStateToProps = (state) => ({
  ...state
});

//Fix voor probleem dat hij meermaals de calls doet omwille van rerender. Tijdelijke oplossing?
let isCodeSendToApi = false;

export default connect(mapStateToProps, mapDispatchToProps)(({
  location,
  userActions
}) => {
  // We extract the code we get from Slack if available
  // This code can be used as an access token by the API
  // Therefore we need to send it off to the API before the user can interact with the app
  const { code } = qs.parse(location.search);
  let result = (
    <p>Loading...</p>
  );

  // Redirect to Slack login when there's no code and not authenticated
  if (!code) {
    result = <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.avatar&client_id=20329357267.759347069140"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>;
  } else if(!isCodeSendToApi) {
    isCodeSendToApi = true;
    userActions.login(code)
  }else{
    result = <Redirect  to="/" />
  }

  // The actual login is managed by Slack. We effectively show nothing. Pure functional component
  return result;
});
