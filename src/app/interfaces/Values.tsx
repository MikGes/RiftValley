import React from 'react';
import { FaTrophy, FaHandshake, FaUsers, FaComments, FaBalanceScale, FaUniversalAccess, FaShieldAlt, FaFistRaised, FaGavel, FaUser } from 'react-icons/fa';

export default function Values() {
  const values = [
    { icon: FaTrophy, text: "Excellence in Performance" },
    { icon: FaHandshake, text: "Partnership" },
    { icon: FaUsers, text: "Team Work" },
    { icon: FaComments, text: "Open Communication & Learning" },
    { icon: FaBalanceScale, text: "Accountability & Transparency" },
    { icon: FaUniversalAccess, text: "Diversity and Inclusiveness" },
    { icon: FaShieldAlt, text: "Integrity and Honesty" },
    { icon: FaFistRaised, text: "Empowerment & Solidarity" },
    { icon: FaGavel, text: "Equality, Equity & Human Right" },
    { icon: FaUser, text: "People Centered" }
  ];

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-2xl font-bold mb-8">OUR VALUES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {values.slice(0, values.length - 2).map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <value.icon size={40} className="text-cyan-400" />
            <p className="mt-4 text-lg font-medium">{value.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center w-2/3">
          {values.slice(values.length - 2).map((value, index) => (
            <div key={index + values.length - 2} className="flex flex-col items-center">
              <value.icon size={40} className="text-cyan-400" />
              <p className="mt-4 text-lg font-medium">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
