import { ITreeMenu } from '@pages/tree-menu/models/tree-menu.interface';
import { ITreeMenuNode } from '@pages/tree-menu/models/tree-menu-node.interface';

const sampleHome: ITreeMenuNode = {
  displayName: 'Home',
  url: '#homeSubmenu',
  nodes: [
    {
      displayName: 'Home1',
      url: '#',
    },
    {
      displayName: 'Home2',
      url: '#',
    },
    {
      displayName: 'Home3',
      url: '#',
    }
  ]
};

const sampleAbout: ITreeMenuNode = {
  displayName: 'About',
  url: '#about',
};

const samplePage: ITreeMenuNode = {
  displayName: 'Page',
  url: '#page',
  nodes: [
    {
      displayName: 'Page 1',
      url: '#',
    },
    {
      displayName: 'Page 2',
      url: '#',
    },
    {
      displayName: 'Page 3',
      url: '#',
    }
  ]
};

const sampleProfile: ITreeMenuNode = {
  displayName: 'Profile',
  url: '#profile',
};

const sampleContact: ITreeMenuNode = {
  displayName: 'Contact',
  url: '#contact',
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
