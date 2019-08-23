import React, { Component } from 'react';
import { connect } from 'react-redux';

class Overview extends Component {
  componentDidMount() {
    if (!this.props.userReducer.activeUser) {
      this.props.history.push('/users');
    }


  }

  render() {
    return (
      <h2>Overview Page yo</h2>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(Overview);
