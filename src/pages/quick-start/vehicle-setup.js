import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Carousel from '@site/src/components/Carousel';

const slides = [
  {
    title: 'Machine AP Position',
    image: '/img/vts-guide/image18.png',
    content: 'For underground loader training, mount the machine AP on the rear of the vehicle on top of the radiator. This location provides clear line-of-sight to other AP units and strong radio signal to all vehicle cameras.',
    steps: [
      'Complete the 5-step Machine AP physical setup',
      'Position on rear of vehicle, on top of radiator',
      'Mount securely to prevent movement',
      'Verify direct line of sight to Trainer and/or Repeater APs',
      'Power on and verify solid green LED'
    ]
  },
  {
    title: 'Camera Positioning - Overview',
    image: '/img/vts-guide/image15.png',
    content: 'The following diagrams show recommended placements of the machine AP and RCS cameras around an Underground Loader. They may be adjusted as required to suit your operation.',
  },
  {
    title: 'Rear Camera Position',
    image: '/img/vts-guide/image15.png',
    content: 'Mount rear camera to observe:',
    steps: [
      'Rear quarter view showing machine node position',
      'Rear attachment points and bucket positioning',
      'Ground behind vehicle',
      'Overall vehicle operation from behind'
    ]
  },
  {
    title: 'Front Camera Position',
    content: 'Front cameras should provide:',
    steps: [
      'Clear view of bucket operation',
      'Visibility of loading area',
      'Forward movement and positioning',
      'Operator visibility of work area'
    ]
  },
  {
    title: 'Positioning Requirements',
    content: 'All camera positions must ensure:',
    steps: [
      '✅ Clear line-of-sight to Machine AP',
      '✅ Protection from physical damage',
      '✅ Optimal viewing angles for training',
      '✅ Secure mounting to prevent movement',
      '✅ No interference with vehicle operation'
    ]
  },
];

export default function VehicleSetupQuickStart() {
  return (
    <Layout title="Vehicle Setup - Quick Start" description="Position cameras and access points on your vehicle">
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

