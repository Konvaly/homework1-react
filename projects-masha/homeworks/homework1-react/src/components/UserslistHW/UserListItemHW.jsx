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
      <div onClick={onClickHandler} className={styles.userInfo}>
        <img className={styles.userPhoto} src={imgSrc}></img>
        <div className={styles.nameAge}>
          {firstName} {lastName} {age} years
        </div>
      </div>
      <button onClick={userDisable} className={styles.btn}>
        Delete
      </button>
    </li>
  );
}

export default UserListItemHW;
