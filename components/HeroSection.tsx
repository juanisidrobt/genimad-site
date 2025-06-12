
import React from 'react';
import { SLOGAN, DOCTOR_IMAGE_URL } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-genimad-teal to-teal-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              {SLOGAN.split(' ').slice(0, 2).join(' ')}
              <span className="block text-genimad-orange-light mt-2">{SLOGAN.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-teal-100 max-w-lg mx-auto md:mx-0">
              En Genimad, nos dedicamos a ofrecer atención médica integral y personalizada para ti y tu familia. Tu salud es nuestra prioridad.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-genimad-orange hover:bg-genimad-orange-dark text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                Contáctanos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[30rem] rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 group">
              <img 
                src={DOCTOR_IMAGE_URL} 
                alt="Médico Dominicano Sonriendo" 
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity"></div>
               <p className="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-50 px-1 rounded">Foto de referencia. Reemplazar con foto real.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
    