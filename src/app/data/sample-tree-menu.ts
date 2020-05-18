import { ITreeMenu } from '@pages/tree-menu/models/tree-menu.interface';
import { ITreeMenuNode } from '@pages/tree-menu/models/tree-menu-node.interface';

const sampleHome: ITreeMenuNode = {
  displayName: 'Home',
  url: '#homeSubmenu',
  level: 1,
  icon: 'fa fa-windows',
  nodes: [
    {
      displayName: 'Dashboard',
      url: '#home1',
      icon: 'fa',
      level: 2,
      nodes: [
        {
          displayName: 'Dashboard 1.1',
          url: '#',
          level: 3,
        }
        , {
          displayName: 'Dashboard 1.2',
          url: '#',
          level: 3,
        }
      ]
    },
    {
      displayName: 'Dashboard v2',
      url: '#',
      level: 2,
      icon: 'fa',
    },
    {
      displayName: 'Dashboard v3',
      url: '#',
      level: 2,
      icon: 'fa',
    }
  ]
};

const sampleAbout: ITreeMenuNode = {
  displayName: 'About',
  url: '#about',
  level: 1,
  icon: 'fa fa-info-circle'
};

const samplePage: ITreeMenuNode = {
  displayName: 'Page',
  url: '#page',
  level: 1,
  icon: 'fa fa-file-text',
  nodes: [
    {
      displayName: 'Page 1',
      url: '#',
      level: 2,
    },
    {
      displayName: 'Page 2',
      url: '#',
      level: 2,
    },
    {
      displayName: 'Page 3',
      url: '#',
      level: 2,
    }
  ]
};

const sampleProfile: ITreeMenuNode = {
  displayName: 'Profile',
  url: '#profile',
  level: 1,
  icon: 'fa fa-gear'
};

const sampleContact: ITreeMenuNode = {
  displayName: 'Contact',
  url: '#contact',
  level: 1,
  icon: 'fa fa-address-book'
};


export const SampleTreeMenu: ITreeMenu = {
  title: 'Dummy Menu Head',
  nodes: [
    sampleHome,
    sampleAbout,
    samplePage,
    sampleProfile,
    sampleContact,
  ]
};
