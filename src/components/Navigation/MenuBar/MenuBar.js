import React from 'react';
import { connect } from 'react-redux';
import { faArrowLeft, faQrcode } from '@fortawesome/free-solid-svg-icons';
import './MenuBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileBubble from '../../Account/ProfileBubble/ProfileBubble';

const MenuBar = ({
  Title,
  userReducer: {
    activeUser,
  },
  history,
  Back,
}) => {
  const navigateToScan = () => {
    history.push('/scan');
  };
  const navigateBack = () => {
    history.goBack();
  };

  return (
    <>
      <nav className="menu-bar">
        <div className="title-bar">
          { Back ? <FontAwesomeIcon onClick={navigateBack} role="button" icon={faArrowLeft} /> : ''}
          <h1 className="title">{Title}</h1>
        </div>
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
