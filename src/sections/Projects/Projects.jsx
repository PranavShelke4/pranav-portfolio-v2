import React from 'react';
import classes from './projects.module.scss';

import { Project } from 'components';
import data from './data';

export default function MyWork() {
  return (
    <section className={classes.projects} id='projects'>
      <div className={classes.container}>
        <h3 className={classes.heading}>My Projects</h3>
        {data.map((project, index) => {
          const { title, type, images, logo, description, features, techStack, link, repo } = project;
          return (
            <Project
              key={index}
              title={title}
              type={type}
              images={images}
              logo={logo}
              features={features}
              stack={techStack}
              link={link}
              repo={repo}
            >
              {description}
            </Project>
          );
        })}
      </div>
    </section>
  );
}
