import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.props.user.gender}</span>
        </div>
        <div>
          <span>{this.props.user.email}</span>
        </div>
        <br />
      </div>
    );
  }
}


export default User;
