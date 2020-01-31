import React from 'react';
import { connect } from 'react-redux';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import './MenuBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileBubble from '../../Account/ProfileBubble/ProfileBubble';

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
          <FontAwesomeIcon onClick={navigateToScan} role="button" icon={faQrcode} />
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
