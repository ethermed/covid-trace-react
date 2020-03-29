import React, { FunctionComponent } from 'react';
import styles from './PersonCard.module.scss';
import { Avatar } from '../Avatar/Avatar';

export enum IPersonStatus {
  HEALTHY = 'Healthy',
  INFECTED = 'Infected',
  TESTED = 'Tested',
  AT_RISK = 'At Risk'
}

export interface IPersonCard {
  profileImgSrc?: string;
  position: string;
  fullName: string;
  status?: IPersonStatus;
}

export const PersonCard: FunctionComponent<IPersonCard> = ({
  profileImgSrc = '',
  position = 'Doctor',
  fullName = 'Jane Doe',
  status = IPersonStatus.TESTED
}) => {
  return (
    <div className={styles.container}>
      <Avatar />
      <div className={styles.card__content}>
        <h3 className="txt__body--2">{position}</h3>
        <h1 className="txt__h5">{fullName}</h1>
        <div className={styles.status__container}>
          <div
            style={{ width: 24, height: 24, backgroundColor: `var(--yellow)` }}
          ></div>
          <div className="status__text">{status}</div>
        </div>
      </div>
    </div>
  );
};
