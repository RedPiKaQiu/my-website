import React from 'react';
import Layout from '@theme/Layout';
import styles from './growth-path.module.css';

const timelineEvents = [
  {
    date: '2020-01-20',
    image: '/img/pikaPic/第一天.jpg',
    description: '到家第一天躲床底'
  },
  {
    date: '2020-01-21',
    image: '/img/pikaPic/第二天.jpeg',
    description: '第二天粘身上'
  },
  {
    date: '2020-01-25',
    image: '/img/pikaPic/窝1.jpeg',
    description: '第一个窝'
  },
  {
    date: '2020-02-01',
    image: '/img/pikaPic/工作.jpeg',
    description: '工作小助手'
  },
  {
    date: '2020-02-15',
    image: '/img/pikaPic/拆肉.jpeg',
    description: '找吃我最牛'
  },
  {
    date: '2020-03-01',
    image: '/img/pikaPic/喝水.jpeg',
    description: '爱喝水'
  },
  {
    date: '2020-03-15',
    image: '/img/pikaPic/拒不下桌.jpeg',
    description: '拒不下桌'
  },
  {
    date: '2020-04-01',
    image: '/img/pikaPic/见小新.jpeg',
    description: '第一次见小新'
  },
  {
    date: '2020-04-15',
    image: '/img/pikaPic/窝2.jpeg',
    description: '第二个窝'
  },
  {
    date: '2020-05-01',
    image: '/img/pikaPic/绝育.jpeg',
    description: '绝育啦'
  }
];

function GrowthPath() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Layout title="皮卡的成长小径">
      <div className={styles.container}>
        <h1 className={styles.title}>皮卡的成长历程</h1>
        <div className={styles.timeline}>
          {timelineEvents.map((event, index) => (
            <div key={index} className={styles.timelineEvent}>
              <div className={styles.timelineDate}>{event.date}</div>
              <div className={styles.timelineContent}>
                <img src={event.image} alt={event.description} />
                <p>{event.description}</p>
              </div>
            </div>
          ))}
          <div className={styles.timelineContinue}>
            <p>未完待续...</p>
          </div>
        </div>
        <button onClick={scrollToTop} className={styles.goTopButton}>
          返回顶部
        </button>
      </div>
    </Layout>
  );
}

export default GrowthPath; 