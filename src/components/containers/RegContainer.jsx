import React from 'react';
import { Registration } from "../auth/registration";
import { connect } from 'react-redux';

const RegContainer = props => {
  return(
    <Registration {...props}/>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    password: state.auth.password
  }
}

export default connect(mapStateToProps)(RegContainer)
