import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a
        href='mailto:pranavshelke4@gmail.com'
        target={'_blank'}
        className='icon'
        rel='noreferrer'
      >
        &#xe910;
      </a>
      <a
        href='https://github.com/PranavShelke4'
        target={'_blank'}
        className='icon'
        rel='noreferrer'
      >
        &#xe908;
      </a>
      <a
        href='https://twitter.com/_PranavShelke'
        target={'_blank'}
        className='icon'
        rel='noreferrer'
      >
        &#xe912;
      </a>
      <a
        href='https://www.linkedin.com/in/pranav-shelke/'
        target={'_blank'}
        className='icon'
        rel='noreferrer'
      >
        &#xe90a;
      </a>
      <a
        href='https://www.instagram.com/_pranav__shelke_/'
        target={'_blank'}
        className='icon'
        rel='noreferrer'
      >
        &#xe90e;
      </a>
    </div>
  );
}

