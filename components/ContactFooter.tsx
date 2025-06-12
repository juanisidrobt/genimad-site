
import React from 'react';
import { CONTACT_INFO, SLOGAN, LOGO_URL } from '../constants';
import { PhoneIcon, EmailIcon, LocationMarkerIcon, AtSymbolIcon as SocialIcon } from './icons/GenericIcons';


const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo & Slogan */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <img src={LOGO_URL} alt="Genimad Logo" className="h-16 w-auto mb-4" />
            <p className="text-genimad-orange-light text-lg font-semibold">{SLOGAN}</p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-genimad-teal" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="hover:text-genimad-orange-light transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <EmailIcon className="h-5 w-5 mr-3 text-genimad-teal" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-genimad-orange-light transition-colors">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-center">
                <SocialIcon className="h-5 w-5 mr-3 text-genimad-teal" />
                <a href={CONTACT_INFO.socialMediaLink} target="_blank" rel="noopener noreferrer" className="hover:text-genimad-orange-light transition-colors">{CONTACT_INFO.socialMediaHandle}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Dirección</h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-genimad-teal" />
                <div>
                  {CONTACT_INFO.addressLine1}<br />
                  {CONTACT_INFO.addressLine2}<br />
                  {CONTACT_INFO.addressLine3}<br />
                  <span className="text-sm text-gray-400">{CONTACT_INFO.landmark}</span>
                </div>
              </li>
            </ul>
             <div className="mt-4">
                <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.addressLine1 + ", " + CONTACT_INFO.addressLine2)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-genimad-orange-light hover:text-white border border-genimad-orange-light hover:border-white py-2 px-4 rounded-md transition-colors"
                >
                    Ver en Google Maps
                </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Centro de Atención Primaria Genimad. Todos los derechos reservados.</p>
          <p className="text-xs mt-1 text-gray-500">Diseñado con ❤️ para tu bienestar.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
    