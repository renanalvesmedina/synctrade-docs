import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Smart Trade Automation',
    Svg: require('@site/static/img/Android-bro.svg').default,
    description: (
      <>
        SyncTrade AI automates trading strategies using advanced algorithms, allowing you to trade efficiently and intelligently 24/7 — even while you sleep.
      </>
    ),
  },
  {
    title: 'Laser Focus on Performance',
    Svg: require('@site/static/img/Data extraction-pana.svg').default,
    description: (
      <>
        Our platform is built so you can focus entirely on what matters most: results. Leave technical analysis, order execution, and risk management to SyncTrade AI’s intelligence.
      </>
    ),
  },
  {
    title: 'Scalable & Secure Infrastructure',
    Svg: require('@site/static/img/Server-amico.svg').default,
    description: (
      <>
        Powered by cutting-edge technology, SyncTrade AI runs on a robust and secure infrastructure. Each client gets a dedicated instance, ensuring high performance and full data protection.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
