import React from 'react';

import { ReactComponent as Facebook } from '../../assets/svg/footer/facebook.svg';
import { ReactComponent as Youtube } from '../../assets/svg/footer/youtube.svg';
import { ReactComponent as Twitter } from '../../assets/svg/footer/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/svg/footer/instagram.svg';

import style from '../FollowUs/FollowUs.module.scss';

export const FollowUs = () => {
  return (
    <div className={style.socialBox}>
      <h2 className={style.socialTitle}>Follow us</h2>
      <ul className={style.socialList}>
        <li className={style.facebookItem}>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
            <Facebook className={style.facebookIcon} />
          </a>
        </li>
        <li className={style.youtubeItem}>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
            <Youtube className={style.youtubeIcon} />
          </a>
        </li>
        <li className={style.twitterItem}>
          <a target="_blank" rel="noreferrer" href="https://twitter.com">
            <Twitter className={style.twitterIcon} />
          </a>
        </li>
        <li className={style.instagramItem}>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
            <Instagram className={style.instagramIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
};
