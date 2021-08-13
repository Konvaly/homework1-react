import React, { Component } from 'react';
import UserListItemHW from './UserListItemHW';

class UserslistHW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          firstName: 'Ian',
          lastName: 'Smith',
          age: 24,
          imgSrc: '',
        },
        {
          id: 2,
          firstName: 'Jessy',
          lastName: 'West',
          age: 32,
          imgSrc: '',
        },
        {
          id: 3,
          firstName: 'Serg',
          lastName: 'Dus',
          age: 56,
          imgSrc: '',
        },
        {
          id: 4,
          firstName: 'Katya',
          lastName: 'Linney',
          age: 27,
          imgSrc: '',
        },
        {
          id: 5,
          firstName: 'Lora',
          lastName: 'Tris',
          age: 53,
          imgSrc: '',
        },
        {
          id: 6,
          firstName: 'Rob',
          lastName: 'Taylor',
          age: 45,
          imgSrc: '',
        },
        {
          id: 7,
          firstName: 'Mark',
          lastName: 'Ewans',
          age: 62,
          imgSrc: '',
        },
        {
          id: 8,
          firstName: 'Kevin',
          lastName: 'Lewis',
          age: 37,
          imgSrc: '',
        },
        {
          id: 9,
          firstName: 'Ryan',
          lastName: 'Carter',
          age: 26,
          imgSrc: '',
        },
        {
          id: 10,
          firstName: 'Erica',
          lastName: 'Wood',
          age: 38,
          imgSrc: '',
        },
      ],
    };
  }

  mapUser = (user) => <UserListItemHW key={user.id} user={user} />;

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
export default UserslistHW;
