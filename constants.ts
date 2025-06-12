
import { ServiceItem } from './types';

export const CONTACT_INFO = {
  phone: "829-374-4363",
  email: "atencion.primaria@genimad.com",
  socialMediaHandle: "@genimadrd",
  socialMediaLink: "https://instagram.com/genimadrd", // Assuming Instagram, replace if different
  addressLine1: "Avenida Hermanas Mirabal #449",
  addressLine2: "Villa Mella, Santo Domingo Norte",
  addressLine3: "República Dominicana",
  landmark: "Al lado de Little Caesars Pizza",
};

export const OPERATING_HOURS = [
  { days: "Lunes a Jueves", time: "7:00 AM - 6:00 PM" },
  { days: "Viernes", time: "7:00 AM - 5:00 PM" },
  { days: "Sábado y Domingo", time: "Cerrado" },
];

export const SERVICES: ServiceItem[] = [
  { icon: "🔬", name: "Laboratorio" },
  { icon: "🌊", name: "Sonografía" },
  { icon: "💓", name: "Ecocardiograma" },
  { icon: "📈", name: "Electrocardiograma" },
  { icon: "🗺️", name: "Mapa" }, // Consider if this is "Mapeo Holter"
  { icon: "❤️‍🩹", name: "Holter" },
  { icon: "👂", name: "Audiología" },
  { icon: "🩺", name: "Timpanometría" },
  { icon: "💉", name: "Vacunación" },
  { icon: "🌀", name: "Colonoscopía" },
  { icon: "✨", name: "Endoscopía" },
];

export const SPECIALTIES: ServiceItem[] = [
  { icon: "😴", name: "Anestesiología" },
  { icon: "❤️", name: "Cardiología" },
  { icon: "🩸", name: "Diabetología" },
  { icon: "🦋", name: "Endocrinología" },
  { icon: "🍎", name: "Nutriología" },
  { icon: "🤰", name: "Ginecología" },
  { icon: "👨‍👩‍👧‍👦", name: "Medicina Familiar" },
  { icon: "⚕️", name: "Medicina General" },
  { icon: "🧠", name: "Neurología" },
  { icon: "💊", name: "Medicina Interna" },
  { icon: "💧", name: "Nefrología" },
  { icon: "🌬️", name: "Neumología" },
  { icon: "🦴", name: "Ortopedia" },
  { icon: "👶", name: "Pediatría" },
  { icon: "💬", name: "Psicología" },
  { icon: "🚻", name: "Urología" },
  { icon: "🌿", name: "Gastroenterología" }, // Added from flyer, icon is a placeholder
];

export const SLOGAN = "Salud y bienestar en cada paso";

// Placeholder for logo path - user should replace this or put their logo in public/genimad-logo.png
export const LOGO_URL = "/genimad-logo.png"; 
// Placeholder for doctor image - user should replace with an actual image of a Dominican doctor
export const DOCTOR_IMAGE_URL = "https://picsum.photos/seed/dominicanphysician/600/800";


    