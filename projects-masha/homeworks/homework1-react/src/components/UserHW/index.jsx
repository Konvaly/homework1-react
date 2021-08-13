import React, { Component } from 'react';
import styles from './UserHW.module.css';

class UserHW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      firstName: 'Jenny',
      lastName: 'Adams',
      age: 25,
      likesCount: 0,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU',
    };
  }

  increment = () => {
    const { likesCount } = this.state;
    this.setState({ likesCount: likesCount + 1 });
  };

  render() {
    const { firstName, lastName, age, imgSrc, likesCount } = this.state;
    return (
      <article className={styles.container}>
        <div className={styles.mainUserInfo}>
          <img src={imgSrc} alt={'Jenny Adams'}></img>
          <div className={styles.userFullName}>
            {firstName} {lastName}
          </div>
          <div className={styles.userAge}>{age} years</div>
        </div>
        <div className={styles.likesCounter}>
          <p>Like!</p>

          <button className={styles.likesBtn} onClick={this.increment}>
            +
          </button>
          <div>{likesCount}</div>
        </div>
      </article>
    );
  }
}
export default UserHW;
