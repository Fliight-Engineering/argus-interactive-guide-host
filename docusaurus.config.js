// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Determine baseUrl based on build type
// For offline/local deployment, set OFFLINE_BUILD=true to use '/'
// For GitHub Pages, use '/argus-interactive-guide/'
const isOfflineBuild = process.env.OFFLINE_BUILD === 'true';
const baseUrl = isOfflineBuild ? '/' : '/argus-interactive-guide/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Argus Video Training System',
  tagline: 'Complete guide for deploying, testing, and operating the Argus VTS',
  favicon: 'img/vts-guide/image29.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fliight-engineering.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fliight-Engineering', // Usually your GitHub org/user name.
  projectName: 'argus-interactive-guide', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card for link previews
      image: 'img/vts-guide/image29.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: false,
      },
      navbar: {
        title: 'Argus VTS',
        logo: {
          alt: 'Argus VTS Logo',
          src: 'img/vts-guide/argus-logo.png',
        },
        items: [
          {
            type: 'html',
            position: 'right',
            value: `<img src="${baseUrl}img/vts-guide/fliight-logo-black.png" alt="FLIIGHT" class="fliight-logo-light" style="height: 28px; padding: 0 1rem;" /><img src="${baseUrl}img/vts-guide/fliight-logo-white.png" alt="FLIIGHT" class="fliight-logo-dark" style="height: 28px; padding: 0 1rem;" />`,
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Fliight-Technologies.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
