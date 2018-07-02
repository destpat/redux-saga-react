import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log('heyyyyy');
  return { selectedUser: state.selectedUser };
};

const ConnectedSlectedUser = ({ selectedUser }) => (
  <div>
    <h1>HELLLLLLO</h1>
    <span>{selectedUser.gender}</span>
    <span>{selectedUser.email}</span>
  </div>
);

const SelectedUser = connect(mapStateToProps)(ConnectedSlectedUser);

export default SelectedUser;
