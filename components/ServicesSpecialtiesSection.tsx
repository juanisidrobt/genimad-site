
import React from 'react';
import { SERVICES, SPECIALTIES } from '../constants';
import { ServiceItem } from '../types';
import { MedicalServicesIcon, SpecialtiesIcon } from './icons/GenericIcons';

const ItemCard: React.FC<{ item: ServiceItem }> = ({ item }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <span className="text-3xl mr-4">{item.icon}</span>
    <span className="text-gray-700 font-medium">{item.name}</span>
  </div>
);

const ServicesSpecialtiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-genimad-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-8 flex items-center">
              <MedicalServicesIcon className="h-10 w-10 mr-3 text-genimad-orange-light" />
              Nuestros Servicios
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((service, index) => (
                <ItemCard key={`service-${index}`} item={service} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-8 flex items-center">
              <SpecialtiesIcon className="h-10 w-10 mr-3 text-genimad-orange-light" />
              Especialidades
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {SPECIALTIES.map((specialty, index) => (
                <ItemCard key={`specialty-${index}`} item={specialty} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSpecialtiesSection;
    