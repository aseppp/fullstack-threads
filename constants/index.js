import { BiHomeCircle, BiSearchAlt, BiHeart, BiEdit } from 'react-icons/bi';
import { BsPeople, BsPerson } from 'react-icons/bs';

export const sidebarLinks = [
  {
    label: 'Home',
    path: '/',
    icon: <BiHomeCircle size={'30px'} color="white" />,
  },
  {
    label: 'Search',
    path: '/search',
    icon: <BiSearchAlt size={'30px'} color="white" />,
  },
  {
    label: 'Activity',
    path: '/activity',
    icon: <BiHeart size={'30px'} color="white" />,
  },
  {
    label: 'Create Thread',
    path: '/create-thread',
    icon: <BiEdit size={'30px'} color="white" />,
  },
  {
    label: 'Comunity',
    path: '/comunity',
    icon: <BsPeople size={'30px'} color="white" />,
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: <BsPerson size={'30px'} color="white" />,
  },
];
