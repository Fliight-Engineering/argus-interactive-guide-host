import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Carousel from '@site/src/components/Carousel';
import styles from './styles.module.css';

const slides = [
  {
    title: 'Training Area Layout',
    image: '/img/vts-guide/example-map.png',
    content: 'Example training area layout showing optimal positioning. The map illustrates trainer position, AP locations, and vehicle operational area for effective deployment planning.',
    steps: [
      'Trainer position situated out of the way of vehicle travel',
      'Trainer AP and Repeater AP locations positioned for coverage',
      'Vehicle operational area clearly defined',
      'Safe distances maintained for trainer positioning'
    ]
  },
  {
    title: 'Launch Argus Software',
    image: '/img/vts-guide/argus-software.jpg',
    content: 'Open the Argus software on the trainer tablet.',
    steps: [
      'Locate Argus software (usually pinned to taskbar or start menu)',
      'Launch the application',
      'Wait 10-15 seconds for software to initialise',
      'Software will automatically detect and connect to all cameras',
      'All 4 camera feeds should start streaming automatically'
    ]
  },
  {
    title: 'Viewing Camera Feeds',
    image: '/img/vts-guide/argus-software.jpg',
    content: 'Once the app is open with the system connected, the four camera feeds will start streaming automatically.',
    steps: [
      'All 4 camera feeds appear in the sidebar',
      'Each feed shows live video from its mounted position',
      'Feeds update in real-time',
      'You can see all cameras simultaneously or focus on specific views'
    ]
  },
  {
    title: 'Full Screen View',
    image: '/img/vts-guide/argus-app-full-screen.png',
    content: 'To view a camera feed in full screen for detailed observation.',
    steps: [
      'Double-tap any sidebar video feed',
      'That camera will expand to full screen view',
      'Double-tap again to return to multi-view',
      'Use this for detailed monitoring of specific operations'
    ]
  },
  {
    title: 'Start Recording',
    image: '/img/vts-guide/argus-software.jpg',
    content: 'Record all camera feeds simultaneously for post-training review and coaching.',
    steps: [
      'Click the "Start Recording" button in the Argus interface',
      'All connected camera feeds will be recorded simultaneously',
      'Recordings are saved to the specified folder (Settings/Recording/Directory)',
      'Recording continues until you click "Stop Recording"',
      'All camera angles are captured in sync for comprehensive review'
    ]
  },
  {
    title: 'Step 5: Network Health Monitoring',
    image: '/img/vts-guide/network-health.png',
    content: 'Monitor the mesh network connection quality in real-time using the network health panel located in the lower right corner of the Argus application.',
    steps: [
      'Check the network health monitoring panel (lower right corner)',
      'Monitor both network bands: wlan0 (2.4GHz) and wlan1 (5GHz)',
      'Give network 1-2 minutes to stabilise after initial connection'
    ],
    table: {
      headers: ['Indicator', 'Status'],
      rows: [
        ['🟢 Green', 'Optimal connection quality, video streaming reliable'],
        ['🟠 Orange', 'Functional connection, working but not optimal'],
        ['🔴 Red', 'Poor connection, significant issues may occur']
      ]
    }
  },
  {
    title: 'Step 6: Recording Management',
    image: '/img/vts-guide/argus-software.jpg',
    content: 'Access and manage your recorded training sessions.',
    steps: [
      'Click "Open Recording Directory" button to access saved recordings',
      'Recordings are stored in the folder specified in Settings/Recording/Directory',
      'All camera feeds are recorded simultaneously in sync',
      'Playback recordings for post-training review and trainee coaching',
      'Use recordings for assessment and improvement feedback'
    ]
  },
  {
    title: 'Step 7: Argus Interface Overview',
    image: '/img/vts-guide/argus-software.jpg',
    content: 'The Argus interface provides all the controls you need for training operations.',
    steps: [
      'Start/Stop recording all connected camera feeds',
      'Quick camera view adjustment button',
      'Open recording directory folder in Explorer',
      'Application Settings access',
      'Expand and close application buttons',
      'Network Health Monitoring Panel (lower right)'
    ]
  },
  {
    title: 'Ready for Training!',
    image: '/img/vts-guide/ready-for-training.png',
    content: 'Your Argus VTS system is now fully operational and ready for training operations. The system will automatically maintain mesh connections and camera feeds during use.',
    steps: [
      '✅ All camera feeds are streaming',
      '✅ Network health is monitored',
      '✅ Recording capability is ready',
      '✅ System is maintaining connections',
    ],
  }
];

export default function OperationQuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  
  return (
    <Layout title="Operation - Quick Start" description="Learn how to use the Argus software and operate the VTS system">
      <div 
        style={{ 
          padding: '1rem 1rem 0', 
          width: '100%', 
          margin: 0, 
          minHeight: 'calc(100vh - var(--ifm-navbar-height))',
          height: 'calc(100vh - var(--ifm-navbar-height))',
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div 
          className={styles.backgroundOverlay}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--ifm-background-color)',
            opacity: '0.85',
            zIndex: 1
          }} 
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', marginTop: '-5vh' }}>
          <Carousel slides={slides} backLink="/quick-start/" />
        </div>
      </div>
    </Layout>
  );
}

