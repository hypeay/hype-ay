'use client';

import {
  
  RiLinkedinFill,
  RiMailFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [

  {
    path: 'https://www.linkedin.com/company/104603299',
    name: <RiLinkedinFill />,
  },

  {
    path: 'https://www.instagram.com/hypeay/',
    name: <RiInstagramFill />,
  },
  {
    path: 'mailto:management@hypeay.com',
    name: <RiMailFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
