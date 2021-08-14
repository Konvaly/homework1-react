import React from 'react';
import styles from './UsersListHW.module.css';

function UserListItemHW(props) {
  const {
    user: { imgSrc, firstName, lastName, age, isSelected },
    onClickHandler,
    userDisable,
  } = props;

  const liStyle = { backgroundColor: '#AFEEEE', border: '1px solid #008080' };

  return (
    <li style={isSelected ? liStyle : null} className={styles.container}>
      <div onClick={onClickHandler}>
        <img className={styles.userPhoto} src={imgSrc}></img>
        {firstName} {lastName} {age} years
      </div>
      <button onClick={userDisable}>Delete</button>
    </li>
  );
}

export default UserListItemHW;
