import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Carousel from '@site/src/components/Carousel';

const slides = [
  {
    title: 'First Deployment Overview',
    content: 'Welcome to your first Argus VTS deployment! This guide will walk you through the complete setup process. If properly planned, setup should take around 5 minutes.',
    steps: [
      'Machine Access Point physical setup (5 steps)',
      'Power on all Access Points (FIRST!)',
      'Sync cameras to mesh network',
      'Power up trainer tablet',
      'Verify all video feeds',
      'Test network quality',
      'Start operation'
    ]
  },
  {
    title: 'Step 1: Machine AP Setup',
    image: '/img/vts-guide/image32.png',
    content: 'Start by setting up the Machine Access Point. Follow the 5-step physical setup process.',
    steps: [
      'Unfold lower antennas',
      'Rotate antenna mast',
      'Engage locking pin',
      'Position all antennas',
      'Ready for mounting'
    ]
  },
  {
    title: 'Step 2: Mount Machine AP',
    image: '/img/vts-guide/image18.png',
    content: 'Mount the Machine AP on the rear of the vehicle on top of the radiator. Ensure clear line-of-sight to other APs.',
  },
  {
    title: 'Step 3: Power On Access Points',
    image: '/img/vts-guide/ap-power-button.png',
    content: 'CRITICAL: Power on ALL Access Points FIRST. Press the power button on each AP and wait for green LED on all units. Allow 30-60 seconds for mesh to establish.',
  },
  {
    title: 'Step 4: Power On Cameras',
    image: '/img/vts-guide/rcs-power-up.png',
    content: 'Once all APs show solid green, power on the cameras. Listen for lens calibration clicking. Wait for green LED on all cameras.',
  },
  {
    title: 'Step 5: Power On Tablet',
    content: 'Power on the trainer tablet and open Argus software. Connect to WiFi network (ARGUS-VTS-XXX) with password: BarmincoVTS',
  },
  {
    title: 'Step 6: Verify System',
    image: '/img/vts-guide/ap-status-led.png',
    content: 'Verify everything is working before starting operations:',
    steps: [
      '✅ All APs show solid green',
      '✅ All cameras show solid green',
      '✅ Tablet connected to WiFi',
      '✅ All camera feeds visible in Argus',
      '✅ Network health indicator green/orange',
      '✅ Video quality acceptable'
    ]
  },
  {
    title: 'You\'re Ready!',
    content: 'Your Argus VTS system is now set up and ready for training operations. The system will automatically maintain mesh connections and camera feeds during use.',
  },
];

export default function FirstDeploymentQuickStart() {
  return (
    <Layout title="First Deployment - Quick Start" description="Complete walkthrough for your first VTS deployment">
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

