import React from 'react';
import { connect } from 'react-redux';
import ProfileBubble from '../../Account/ProfileBubble/ProfileBubble';
import './MenuBar.scss';

const MenuBar = ({
  Title,
  userReducer: {
    activeUser,
  },
  history,
}) => {
  const navigateToScan = () => {
    history.push('/scan');
  };

  return (
    <>
      <nav className="menu-bar">
        <h1 className="title">{Title}</h1>
        <div className="control-bar">
          <span role="button" className="fas fa-qrcode" onClick={navigateToScan} />
          <ProfileBubble account={activeUser} />
        </div>
      </nav>
      <span className="menu-bar-spacer" />
    </>
  );
};

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(MenuBar);
