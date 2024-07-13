import React from 'react'
import { FaTrophy, FaHandshake, FaUsers, FaComments, FaBalanceScale, FaUniversalAccess, FaShieldAlt, FaFistRaised, FaGavel, FaUser } from 'react-icons/fa';

export default function Values() {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-2xl font-bold mb-8">OUR VALUES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaTrophy size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Excellence in Performance</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHandshake size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Partnership</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Team Work</p>
        </div>
        <div className="flex flex-col items-center">
          <FaComments size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Open Communication & Learning</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBalanceScale size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Accountability & Transparency</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUniversalAccess size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Diversity and Inclusiveness</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Integrity and Honesty</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFistRaised size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Empowerment & Solidarity</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGavel size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">Equality, Equity & Human Right</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUser size={40}  className="text-cyan-400"/>
          <p className="mt-4 text-lg font-medium">People Centered</p>
        </div>
      </div>
    </div>
  );
}
