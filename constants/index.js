import { BiHomeCircle, BiSearchAlt, BiHeart, BiEdit } from 'react-icons/bi';
import { BsPeople, BsPerson } from 'react-icons/bs';

export const sidebarLinks = [
  {
    label: 'Home',
    path: '/',
    icon: <BiHomeCircle size={'25px'} color="white" />,
  },
  {
    label: 'Search',
    path: '/search',
    icon: <BiSearchAlt size={'25px'} color="white" />,
  },
  {
    label: 'Activity',
    path: '/activity',
    icon: <BiHeart size={'25px'} color="white" />,
  },
  {
    label: 'Create Thread',
    path: '/create-thread',
    icon: <BiEdit size={'25px'} color="white" />,
  },
  {
    label: 'Comunity',
    path: '/comunity',
    icon: <BsPeople size={'25px'} color="white" />,
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: <BsPerson size={'25px'} color="white" />,
  },
];
