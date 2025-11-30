import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Carousel from '@site/src/components/Carousel';

const slides = [
  {
    title: 'Step 1: Unfold Lower Antennas',
    image: '/img/vts-guide/image32.png',
    content: 'Pick the Machine AP up out of the hard case and fold out the lower two antennas.',
  },
  {
    title: 'Step 2: Rotate Antenna Mast',
    image: '/img/vts-guide/image24.png',
    content: 'Unclip the Antenna mast and rotate it towards the upward position.',
  },
  {
    title: 'Step 3: Engage Locking Pin',
    image: '/img/vts-guide/image25.png',
    content: 'Pull the latch loop and engage the locking pin once the mast is in the vertical position.',
  },
  {
    title: 'Step 4: Position All Antennas',
    image: '/img/vts-guide/image21.png',
    content: 'Rotate two of the antennas so their elbow joints point upwards, then fold all antennas at their 45 degree latched position.',
  },
  {
    title: 'Step 5: Ready for Deployment',
    content: 'The Machine node is now ready to be mounted and powered on. Once you perform this setup a few times, it becomes second nature and takes less than a minute!',
  },
];

export default function MachineAPQuickStart() {
  return (
    <Layout title="Machine AP Setup - Quick Start" description="5-step visual guide to set up the Machine Access Point">
      <div style={{ padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <Link to="/quick-start/" style={{ color: '#0d343d', textDecoration: 'none' }}>
            ← Back to Quick Start
          </Link>
        </div>
        <Carousel slides={slides} />
      </div>
    </Layout>
  );
}

