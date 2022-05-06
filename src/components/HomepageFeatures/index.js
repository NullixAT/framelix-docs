import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Framelix was designed to give you the tools to build production ready backend applications.
          Built in features like form generator, self managing database scheme, fast performance and many more.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          You can focus on your business logic, because the rest is handled by the framework.
          Design, database management and many other things under the hood are managed by the framework.
      </>
    ),
  },
  {
    title: 'Agility as it\'s best',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Super fast development. PHP need no build process. Update code, reload page, done.
          Built-in SCSS and JS compiler (if you ever need custom CSS/JS) compile within seconds automatically.
          Deployment is also as easy as you can think of. Apply your updated code, done.
          On server-side, no build process what so ever is needed.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
