import React from 'react';
import { connect } from 'react-redux';
import ProfileBubble from '../../Account/ProfileBubble/ProfileBubble';
import './MenuBar.scss';

const MenuBar = ({ Title, Controls, userReducer: { activeUser } }) => (
  <>
    <nav className="menu-bar">
      {Controls}
      <h1 className="title">{Title}</h1>
      <ProfileBubble account={activeUser} />
    </nav>
    <span className="menu-bar-spacer" />
  </>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(MenuBar);
