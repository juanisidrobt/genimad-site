
import React from 'react';
import { CONTACT_INFO, LOGO_URL } from '../constants';
import { PhoneIcon, AtSymbolIcon as SocialIcon } from './icons/GenericIcons'; // Using AtSymbolIcon as a generic social icon

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img className="h-14 w-auto" src={LOGO_URL} alt="Genimad Logo" />
            </a>
            <div className="hidden md:block ml-4">
              <h1 className="text-2xl font-bold text-genimad-teal-dark">Centro de Atención Primaria</h1>
              <h2 className="text-3xl font-extrabold text-genimad-orange">GENIMAD</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="flex items-center text-sm font-medium text-gray-700 hover:text-genimad-orange transition-colors">
              <PhoneIcon className="h-5 w-5 mr-1 text-genimad-teal" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={CONTACT_INFO.socialMediaLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-genimad-orange transition-colors">
              <SocialIcon className="h-6 w-6" />
              <span className="sr-only">Social Media</span>
            </a>
          </div>
        </div>
        <div className="md:hidden text-center pb-2">
            <h1 className="text-lg font-bold text-genimad-teal-dark">Centro de Atención Primaria</h1>
            <h2 className="text-xl font-extrabold text-genimad-orange">GENIMAD</h2>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
    