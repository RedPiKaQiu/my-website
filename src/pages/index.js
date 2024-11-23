import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePhoto}>
        <img src="/img/pikaPic/艺术照.JPG" alt="皮卡的艺术照" />
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileInfo}>
          <p><strong>姓名：</strong>皮卡</p>
          <p><strong>出生日期：</strong>2020年1月20日</p>
          <p><strong>血统：</strong>美短加白</p>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <ProfileCard />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
