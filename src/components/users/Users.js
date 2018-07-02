import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSelectedUser } from '../../actions';
import User from './User';
import api from './getUsers';

const mapDispatchToProps = dispatch => {
  console.log('hey dispatch les users');
  return {
    addSelectedUser: user => dispatch(addSelectedUser(user))
  };
};


class ConnectedUsers extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : []
    };
  }
  componentDidMount() {
    api.get().then((res) => {
      console.log(res.data.results);
      this.setState({users : res.data.results})
    })
  }

  addSelectedUserInStore(user) {
    console.log('hey dispatch sa');
    this.props.addSelectedUser({gender : user.gender}) // Call redux for update store selected user
  }

  render() {
    return (
      <div>
        {
          this.state.users.map((user, index) => {
            return (
              <div key={index} onClick={() => this.addSelectedUserInStore(user)}>
                <User user={user} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

const Users = connect(null, mapDispatchToProps)(ConnectedUsers);
export default Users;
