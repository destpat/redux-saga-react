import React, { Component } from 'react';
import Users from './components/users/Users';
import SelectedUser from './components/selectedUser/SelectedUser';

class App extends Component {
  render() {
    return (
      <div>
        <Users />
        <SelectedUser />
      </div>
    );
  }
}

export default App;
