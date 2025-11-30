import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const quickStartOptions = [
  {
    title: 'Machine AP Setup',
    description: '5-step visual guide to set up the Machine Access Point',
    image: '/img/vts-guide/image32.png',
    link: '/quick-start/machine-ap',
    icon: '📡'
  },
  {
    title: 'Power On Sequence',
    description: 'Learn the correct order to power on all components',
    image: '/img/vts-guide/ap-status-led.png',
    link: '/quick-start/power-on',
    icon: '🔌'
  },
  {
    title: 'Vehicle Setup',
    description: 'Position cameras and access points on your vehicle',
    image: '/img/vts-guide/image18.png',
    link: '/quick-start/vehicle-setup',
    icon: '🚛'
  },
  {
    title: 'First Deployment',
    description: 'Complete walkthrough for your first VTS deployment',
    image: '/img/vts-guide/rcs-power-up.png',
    link: '/quick-start/first-deployment',
    icon: '🚀'
  }
];

export default function QuickStart() {
  return (
    <Layout title="Quick Start Guide" description="Visual quick start guides for Argus VTS">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Quick Start Guides</h1>
          <p className={styles.subtitle}>
            Step-by-step visual guides to get you up and running quickly
          </p>
        </div>

        <div className={styles.optionsGrid}>
          {quickStartOptions.map((option, idx) => (
            <Link
              key={idx}
              to={option.link}
              className={styles.optionCard}
            >
              <div className={styles.cardImage}>
                <img src={useBaseUrl(option.image)} alt={option.title} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{option.icon}</div>
                <h2 className={styles.cardTitle}>{option.title}</h2>
                <p className={styles.cardDescription}>{option.description}</p>
                <div className={styles.cardLink}>
                  Start Guide →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <p>
            Need more detail? Check out the{' '}
            <Link to="/docs/setup-operation/">full manual</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

