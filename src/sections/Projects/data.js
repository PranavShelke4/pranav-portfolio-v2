import { TEDxVITimg, TEDxVITLogo } from '../../images/TEDxVIT';
import { YashdentalImg, YCDCLogo } from '../../images/Ycdental';
import { PeerTECHimg, PeerTECHLogo } from '../../images/PeerTECH';
import { ITMSImg, ITMSLogo } from '../../images/ITMS';
import { DigitalPeerSupportImg, DigitalPeerSupportLogo } from '../../images/DigitalPeerSupport';
import { OliLoliLookImg, OliLoliLookLogo  } from '../../images/OliLoliLook';


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
  type: 'Collaborated & Freelance project',
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
  type: 'Freelance project',
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


const ITMS = {
  title: 'ITMS - Collage ERP System Website',
  type: 'Collaborated & Sponsored project',
  logo: ITMSLogo,
  images: {
    light: { small: ITMSImg, large: ITMSImg },
    dark: { small: ITMSImg, large: ITMSImg }
  },
  description:
    'The College ERP System website is designed for Government Polytechnic Awasari College. It is built using the MERN stack.',
  features: [
    'HOD, Class Teacher, Subject Teacher Login System',
    'HOD can see all faculty data',
    'HOD can reject or approve leaves',
    'Class Teacher can assign subjects to Subject Teachers',
    'Class Teacher can manage all classroom data',
    'Subject Teacher can manage their assigned subject data',
    'Multiple images, PDFs, and files can be uploaded'
  ],
  techStack: ['React JS', 'Redux', 'NodeJS', 'MongoDB', 'Figma'],
  repo: 'https://github.com/Avadhut-Shedage/ITMS-NEW'
};


const DigitalPeerSupport = {
  title: 'Digital Peer Support - Trust',
  type: 'Freelance Project',
  logo: DigitalPeerSupportLogo,
  images: {
    light: { small: DigitalPeerSupportImg, large: DigitalPeerSupportImg },
    dark: { small: DigitalPeerSupportImg, large: DigitalPeerSupportImg }
  },
  description: 'Digital Peer Support is a diverse team working together to improve digital peer support programs.',
  features: [
    'Easy SignIn',
    'Upload multiple Photos',
    'Trainers, Course Registration',
    'Memebership Subscription'
  ],
  techStack: ['WordPress'],
  link: 'https://digitalpeersupport.org/'
};


const OliLoliLook = {
  title: 'Oli Loli Look - E-commerce Website',
  type: 'Freelance Project',
  logo: OliLoliLookLogo,
  images: {
    light: { small: OliLoliLookImg, large: OliLoliLookImg },
    dark: { small: OliLoliLookImg, large: OliLoliLookImg }
  },
  description: 'Oli Loli Look is a website offering childrens clothing based in Poland',
  features: [
    'User Login and Registration System',
    'Search products',
    'Admin Dashboard',
    'Multiple Image Uploads',
    'Secure Payment',
    'Cart, Wishlist Option',
    'Product review option'
  ],
  techStack: ['WordPress'],
  link: 'http://olilolilook.com/'
};


const data = [TEDxVIT, ycdental, PeerTech, ITMS, OliLoliLook, DigitalPeerSupport];
export default data;

