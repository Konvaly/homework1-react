import React from 'react';

function UserListItemHW(props) {
  const {
    user: { id, imgSrc, firstName, lastName, age },
  } = props;

  return (
    <li>
      ID: '{id}' UserPhoto: '{imgSrc}' Fullname: '{firstName} {lastName}' Age: '
      {age}'
    </li>
  );
}

export default UserListItemHW;
