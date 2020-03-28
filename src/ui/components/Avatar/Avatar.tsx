import React, { FunctionComponent } from 'react';
import styles from './Avatar.module.scss';
import avatarPlaceholder from '../../../assets/icons/avatar-placeholder.png';

export const Avatar: FunctionComponent<{ imgSrc?: string }> = ({
  imgSrc = avatarPlaceholder
}) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} className={styles.image} alt="Avatar" />
    </div>
  );
};
