import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProfileListItem from '../../Account/ProfileListItem/ProfileListItem';
// import ProfileListItem from '../../Account/ProfileListItem/ProfileListItem';
import * as userActions from '../../../redux/actions/users';
import './Users.scss';

class UserView extends Component {
  constructor(props) {
    super(props);

    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  componentDidMount() {
    this.props.userActions.fetchAllUsers();
  }

  handleChangeUser(user) {
    this.props.userActions.setActiveUser(user);
    this.props.history.push('/overview');
  }

  render() {
    const users = this.props.userReducer.users.map(user => (
      <ProfileListItem Action={this.handleChangeUser} key={user.id} account={user} />
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
