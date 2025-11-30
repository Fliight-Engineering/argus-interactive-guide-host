import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Carousel from '@site/src/components/Carousel';

const slides = [
  {
    title: 'Critical: Power On Order',
    content: 'ALWAYS turn on Access Points FIRST before powering up other system components. This ensures the mesh network is fully established before cameras and tablet attempt to connect.',
    steps: [
      'Access Points must be powered on first',
      'Wait for all APs to show green LED',
      'Then power on cameras',
      'Finally, power on the tablet'
    ]
  },
  {
    title: 'Step 1: Power On Access Points',
    image: '/img/vts-guide/ap-power-button.png',
    content: 'Press the large black power button firmly, then release. Wait for the access point to initialise.',
    steps: [
      'Press the power button firmly',
      'Release the button',
      'Watch for status LED',
      'Wait for green LED on all units',
      'Allow 30-60 seconds for mesh to establish'
    ]
  },
  {
    title: 'Step 2: Power On Cameras',
    image: '/img/vts-guide/rcs-power-up.png',
    content: 'Once all Access Points show solid green, power on the cameras.',
    steps: [
      'Press power button on each camera',
      'Listen for lens calibration clicking',
      'LED will show red when powered',
      'Wait for LED to change to green',
      'Green means connected to mesh network'
    ]
  },
  {
    title: 'Step 3: Power On Tablet',
    content: 'Finally, power on the trainer tablet and open the Argus software.',
    steps: [
      'Press power button (left-hand side, top edge)',
      'Wait for boot sequence',
      'Open Argus software',
      'Check all cameras appear',
      'Verify video quality'
    ]
  },
  {
    title: 'LED Status Reference',
    image: '/img/vts-guide/ap-status-led.png',
    content: 'Understanding the LED indicators helps you know when everything is ready.',
    steps: [
      'Pulsing RGB colours = Initializing (wait)',
      'Solid Blue = Ready, waiting to connect',
      'Solid Green = Connected and meshed (ready!)',
      'Solid Red (camera) = Powered, syncing to network'
    ]
  },
  {
    title: 'System Validation',
    content: 'Before beginning training operations, verify everything is working:',
    steps: [
      '✅ All APs show solid green',
      '✅ All cameras show solid green',
      '✅ Tablet connects to WiFi (ARGUS-VTS-XXX)',
      '✅ Argus software shows all camera feeds',
      '✅ Network health indicator shows green or orange',
      '✅ Video feed quality is acceptable'
    ]
  },
];

export default function PowerOnQuickStart() {
  return (
    <Layout title="Power On Sequence - Quick Start" description="Learn the correct order to power on all components">
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

