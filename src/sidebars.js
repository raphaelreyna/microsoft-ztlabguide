/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [    
    'overview',
    'map',
    {
      type: 'category',
      label: '🛠️ Pre-requisites',
      items: ['vssub', 'setupm365', 'linkazuresub'],
    },
    'hybriddeploy',
    'clouddeploy',
    'cloudsync',
    'pim',
    'securetenant',
    'license',
    'pswdprotect',
    'pswdlesspsi',
    'pswdlesscba',
    'pswdlesswhfb',
    'pswdlessfido2',
    'saasapp',
    'appproxy',
    'goventmgmt',
    'govaccrev',
    'govlcw',
    'intappprot',
    'intmdm',
    'defidentity',
    'defo365',
    'defendpoint',
    'defcloudapp'
  ],

  // By default, Docusaurus generates a sidebar from the docs folder structure
  //docsSidebar2: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
