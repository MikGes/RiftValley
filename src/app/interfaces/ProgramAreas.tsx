import { FaHome, FaBook, FaFirstAid, FaUsers, FaGlobe, FaShieldAlt } from 'react-icons/fa';

export default function ProgramAreas() {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-2xl font-bold mb-8">PROGRAM AREAS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaHome  color=' #00bcd4' size={40} />
          <p className="mt-4 text-lg font-medium">Sustainable Livelihood and Resilience</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBook color=' #00bcd4' size={40} />
          <p className="mt-4 text-lg font-medium">Education and Skill Development</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFirstAid color=' #00bcd4' size={40} />
          <p className="mt-4 text-lg font-medium">Emergency and Humanitarian Support</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers color=' #00bcd4' size={40} />
          <p className="mt-4 text-lg font-medium">Women, Child and Older Person Empowerment</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGlobe color=' #00bcd4' size={40} />
          <p className="mt-4 text-lg font-medium">Climate Change Response and Peace Building</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt color=' #00bcd4' size={40} />
          <p className="mt-4 text-lg font-medium">Citizens Right Protection</p>
        </div>
      </div>
    </div>
  );
}
