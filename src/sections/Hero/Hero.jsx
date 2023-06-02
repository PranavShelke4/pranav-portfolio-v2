import React from 'react';
import classes from './hero.module.scss';
import { Link } from 'components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>
          <span role='img' aria-label='wave emoji'>
            👋
          </span>
          Hi, there it's me
        </h5>
        <h1 className={classes.hero__name}>
          <span className={classes.emphasize}>Pranav</span>
          <span> Shelke</span>
        </h1>
        <h2 className={classes.info}>
          I like building things on the web.
          <br />I do that by using JavaScript and a lot of coffee
          <span role='img' aria-label='coffee emoji'>
            ☕
          </span>
          .
        </h2>
      </div>

      <div role='img' className={classes.waterMark}>
        (PS)
      </div>

      <div className={classes.quickContact}>
        <Link to='mailto:pranavshelke4@gmail.com' lone>
          pranavshelke4@gmail.com
        </Link>
        <Link to='https://github.com/PranavShelke4' lone>
          github.com/PranavShelke4
        </Link>
      </div>
    </section>
  );
}
