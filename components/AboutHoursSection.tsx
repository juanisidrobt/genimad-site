
import React from 'react';
import { OPERATING_HOURS } from '../constants';
import { ClockIcon, InfoIcon } from './icons/GenericIcons';

const AboutHoursSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-genimad-teal-dark mb-6 flex items-center">
              <InfoIcon className="h-8 w-8 mr-3 text-genimad-orange" />
              Sobre Nosotros
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Centro de Atención Primaria Genimad es su aliado en la búsqueda de un bienestar integral. Ofrecemos un ambiente cálido y profesional donde la salud de nuestros pacientes es lo más importante. Contamos con un equipo de especialistas dedicados y tecnología moderna para brindarle el cuidado que merece.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestra misión es proporcionar servicios de salud accesibles y de alta calidad, enfocados en la prevención, diagnóstico y tratamiento, siempre con un trato humano y personalizado.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-genimad-teal-dark mb-6 flex items-center">
              <ClockIcon className="h-8 w-8 mr-3 text-genimad-orange" />
              Horario de Atención
            </h2>
            <div className="space-y-3">
              {OPERATING_HOURS.map((item, index) => (
                <div key={index} className="flex justify-between p-3 bg-gray-100 rounded-md shadow-sm">
                  <span className="font-medium text-gray-800">{item.days}:</span>
                  <span className="text-gray-600">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHoursSection;
    