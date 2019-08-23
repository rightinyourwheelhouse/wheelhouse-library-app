import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProfileListItem from '../../Account/ProfileListItem/ProfileListItem';
// import ProfileListItem from '../../Account/ProfileListItem/ProfileListItem';
import * as userActions from '../../../redux/actions/users';
import './Users.scss';

class UserView extends Component {
  componentDidMount() {
    this.props.userActions.fetchAllUsers();
  }

  render() {
    const users = this.props.userReducer.users.map(user => (
      <ProfileListItem key={user.id} account={user} />
    ));

    return (
      <div className="user-list">
        { users }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
