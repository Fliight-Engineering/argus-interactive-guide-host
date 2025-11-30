// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main documentation sidebar
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    'about-vts',
    'argus-software',
    'access-points',
    'remote-camera-systems',
    'trainers-tablet',
    {
      type: 'category',
      label: 'Set Up and Operation',
      link: {
        type: 'doc',
        id: 'setup-operation/index',
      },
      items: [
    {
          type: 'doc',
          id: 'setup-operation/index',
          label: 'Overview',
        },
        'setup-operation/access-points-initialization',
        'setup-operation/cameras',
        'setup-operation/tablet-setup',
        'setup-operation/vehicle-setup',
        'setup-operation/access-points-deployment',
        {
          type: 'doc',
          id: 'setup-operation/best-practices',
          label: 'Best Practices',
        },
      ],
    },
  ],
};

export default sidebars;
