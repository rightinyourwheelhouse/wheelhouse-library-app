import React from 'react';
import { connect } from 'react-redux';
import ProfileBubble from '../../Account/ProfileBubble/ProfileBubble';
import './MenuBar.scss';

const MenuBar = ({ text, userReducer: { activeUser } }) => (
  <nav className="menu-bar">
    <h1 className="title">{text}</h1>
    <ProfileBubble account={activeUser} />
  </nav>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(MenuBar);
