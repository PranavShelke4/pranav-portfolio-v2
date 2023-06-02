import {
  friendsDriveImageSmall,
  friendsDriveImageLarge,
  friendsDriveLogo
} from '../../images/FriendDrive';
import {
  TowMeterSquareLogo,
  TowMeterSquareMobile
} from '../../images/TowMeterSquare';

import { YashdentalImg, YCDCLogo } from '../../images/Ycdental';
import { PeerTECHimg, PeerTECHLogo } from '../../images/PeerTECH';
import { TEDxVITimg, TEDxVITLogo } from '../../images/TEDxVIT';


const TEDxVIT = {
  title: 'TEDxVIT - club website',
  type: 'Collaborated project',
  logo: TEDxVITLogo,
  images: {
    light: { small: TEDxVITimg, large: TEDxVITimg },
    dark: { small: TEDxVITimg, large: TEDxVITimg }
  },
  description:
    'Our goal was to create a website that embodies the values of the TEDxVIT club and provides a captivating experience for our audience. ',
  features: [
    'Event Registration',
    'Newsletter subscription',
    'Access to past event information',
    'Gallery of past evente',
    'Information on previous TEDxVIT CC',
    'responsive, and visually appealing'
  ],
  techStack: [
    'NextJS',
    'Docker',
    'SCSS'
  ],
  link: 'http://tedxvitpune.in/',
  repo: 'https://github.com/Aryan-Jagadale/tedxweb2023'
};


const ycdental = {
  title: 'Yashdental - Collage Website',
  type: 'Collaborated project',
  logo: YCDCLogo,
  images: {
    light: { small: YashdentalImg, large: YashdentalImg },
    dark: { small: YashdentalImg, large: YashdentalImg }
  },
  description:
    'We developed a website for Shri Yashwantaro Chavan Dental College, enabling easy content management and seamless document storage.',
  features: [
    'User-friendly interface',
    'Easy content management',
    'Seamless document storage',
    'Page Password Protected',
    'Responsive layout'
  ],
  techStack: ['React', 'SCSS', 'WordPress', 'Figma UI'],
  link: 'https://yashdental.org/'
};



const PeerTech = {
  title: 'PeerTECH - Admin Dashbord',
  type: 'Dashbord project',
  logo: PeerTECHLogo,
  images: {
    light: { small: PeerTECHimg, large: PeerTECHimg },
    dark: { small: PeerTECHimg, large: PeerTECHimg }
  },
  description:
    'The Admin and Super Admin Dashboard project, built with MERN stack and Firebase offers administrators and super administrators a user-friendly interface to manage app and website content.',
  features: [
    'Login and Registration',
    'Content CRUD functionality',
    'Admin & User Add/Delete Option',
    'Realtime resources sharing',
    'Role Upation Option'
  ],
  techStack: ['React JS', 'Firebase', 'Material UI', 'React Icons'],
  link: 'https://dpsnorway.netlify.app/'
};



const friendsDrive = {
  title: 'Friend Drive - Resources storing app',
  type: 'Featured project',
  logo: friendsDriveLogo,
  images: {
    light: { small: friendsDriveImageSmall, large: friendsDriveImageLarge },
    dark: { small: friendsDriveImageSmall, large: friendsDriveImageLarge }
  },
  description: 'A fun and easy to use drive space where you can store photos.',
  features: [
    'Easy SignIn with Google',
    'Upload multiple Photos',
    'Create new Album',
    'Delete Photos / Albums',
    'Download Photos'
  ],
  techStack: ['React JS', 'Firebase', 'Material UI', 'Redux'],
  repo: 'https://github.com/Prathmesh-Dhatrak/friend-drive'
};

const towMeterSquare = {
  title: 'Two Meter Square - MERN stack e-commerce website',
  type: 'Collaborated project',
  logo: TowMeterSquareLogo,
  images: {
    light: { small: TowMeterSquareMobile, large: TowMeterSquareMobile },
    dark: { small: TowMeterSquareMobile, large: TowMeterSquareMobile }
  },
  description:
    'The Ecommerce website for TowMeterSquare Shop. Built with React.',
  features: [
    'Search products',
    'User Login and Registration System',
    'Admin Dashboard',
    'Categories CRUD',
    'Payment with Stripe',
    'Star Rating System',
    'Multiple Image Uploads',
    'Products CRUD'
  ],
  techStack: ['React JS', 'Redux', 'Firebase', 'MongoDB'],
  link: 'https://twometersquare.netlify.app/',
  repo: 'https://github.com/Prathmesh-Dhatrak/client'
};

const data = [TEDxVIT, ycdental, PeerTech, towMeterSquare, friendsDrive];
export default data;

